import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { TodoList } from './TodoList'

configure({ adapter: new Adapter() })

var component;

const getMockedTodos = (isEmpty) => {
    return isEmpty ? [] : [
        { id: 1, description: 'Tarefa 01', done: false },
        { id: 2, description: 'Tarefa 02', done: true }
    ]
}

const list = jest.fn();
const remove = jest.fn();
const changeStatus = jest.fn();

beforeEach(() => {
    component = mount(<TodoList list={list} changeStatus={changeStatus} remove={remove}/>);
})

afterEach(() => {
    component.unmount();
});

describe('Testes TodoList', () => {

    test('Verifica se o componente foi renderizado', () => {
        component.setProps({ todos: getMockedTodos(true) })
        expect(component.exists()).toBe(true);
    })

    test('Verifica se o componente foi renderizado sem registros retornados', () => {
        component.setProps({ todos: getMockedTodos(true) })    
        expect(component.exists()).toBe(true);

        const table = component.find('.todo-list_table').at(0);
        const tableRows = table.find('tbody').at(0).find('tr');

        expect(tableRows).toHaveLength(0);
    })

    test('Verifica se o componente foi renderizado com os registros retornados', () => {
        const todos = getMockedTodos();
        component.setProps({ todos })

        expect(component.exists()).toBe(true);

        const table = component.find('.todo-list_table').at(0);
        const tableRows = table.find('tbody').at(0).find('tr');

        expect(tableRows).toHaveLength(2);

        // Row 1
        const row1 = tableRows.at(0);
        const col11 = row1.find('td').at(0);
        const col21 = row1.find('td').at(1);

        expect(col11.text()).toBe(todos[0].description);
        expect(col11.find('span').hasClass('todo-done')).toBeFalsy();
        expect(col21.find('button').at(0).find('i').hasClass('fa fa-check')).toBeTruthy();
        expect(col21.find('button').at(1)).toHaveLength(0);

        // Row 2
        const row2 = tableRows.at(1);        
        const col12 = row2.find('td').at(0);
        const col22 = row2.find('td').at(1);

        expect(col12.text()).toBe(todos[1].description);
        expect(col12.find('span').hasClass('todo-done')).toBeTruthy();
        expect(col22.find('button').at(0).find('i').hasClass('fa fa-undo')).toBeTruthy();
        expect(col22.find('button').at(1).find('i').hasClass('fa fa-trash')).toBeTruthy();
    })

    test('Alteração do status de uma task', () => {
        const todos = getMockedTodos();

        const changeStatusFunction = todo => {
            const t = todos.find(td => td.id === todo.id);
            t.done = !t.done;
        }
        const changeStatusTodo = jest.fn(todo => changeStatusFunction(todo));
        component.setProps({ todos, changeStatus: changeStatusTodo })
        expect(component.exists()).toBe(true);

        // Antes da alteração
        let tableRows = component.find('.todo-list_table').at(0)
                                   .find('tbody').at(0)
                                   .find('tr');
        let row1 = tableRows.at(0);
        let col11 = row1.find('td').at(0);
        const col21 = row1.find('td').at(1);        
        const removeButton = col21.find('button').at(0);

        expect(col11.find('span').hasClass('todo-done')).toBeFalsy();
        
        removeButton.simulate('click');

        // Depois da alteração
        component.setProps({ todos })         
        tableRows = component.find('.todo-list_table').at(0)
                                        .find('tbody').at(0)
                                        .find('tr');
        row1 = tableRows.at(0);                                            
        col11 = row1.find('td').at(0);

        expect(col11.find('span').hasClass('todo-done')).toBeTruthy();
    }) 

    test('Remoção de uma task finalizada', () => {
        let todos = getMockedTodos();
        const removedTodo = { ...todos[1] };

        const removeFunction = todo => {
            todos.splice(todos.indexOf(todo), 1);
        }
        const removeTodo = jest.fn( todo => removeFunction(todo) );
        component.setProps({ todos, remove: removeTodo })
        expect(component.exists()).toBe(true);

        // Antes de remoção
        let tableRows = component.find('.todo-list_table').at(0)
                                   .find('tbody').at(0)
                                   .find('tr');

        
        expect(tableRows).toHaveLength(2);

        const row2 = tableRows.at(1);
        const col12 = row2.find('td').at(0);
        const col22 = row2.find('td').at(1);
        const removeButton = col22.find('button').at(1);

        expect(col12.text()).toBe(removedTodo.description);

        removeButton.simulate('click');
        expect(removeTodo).toBeCalledWith(removedTodo);

        // Depois de remoção
        component.setProps({ todos })        
        tableRows = component.find('.todo-list_table').at(0)
                                   .find('tbody').at(0)
                                   .find('tr');

        expect(tableRows).toHaveLength(1);
        
    })  

})