import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('Testes renderização do botão', () => {

    test('Verifica se botão foi renderizado', () => {
        const component = mount(<Button />);
        expect(component.exists()).toBe(true);
        component.unmount();
    })

    test('Verifica se botão foi renderizado e está visível ao omitir a propriedade hide', () => {
        const component = mount(<Button />);
        expect(component.exists()).toBe(true);
        expect(component.find('button')).toHaveLength(1);

        expect(component.children().props().children.props.className).toEqual('todo-button ');
        expect(component.find('button').at(0).hasClass('todo-button')).toBeTruthy();
        component.unmount();
    })

    test('Verifica se botão foi renderizado e está visível ao informar a propriedade hide como false', () => {
        const component = mount(<Button hide={false}/>);
        expect(component.exists()).toBe(true);
        expect(component.find('button')).toHaveLength(1);
        component.unmount();
    })

    test('Verifica se botão foi renderizado e não está visível ao informar a propriedade hide como true', () => {
        const component = mount(<Button hide={true}/>);
        expect(component.exists()).toBe(true);
        expect(component.find('button')).toHaveLength(0);
        component.unmount();
    })

    test('Verifica se botão foi renderizado e com o icone informado', () => {
        const component = mount(<Button icon="check"/>);
        expect(component.exists()).toBe(true);
        expect(component.prop('icon')).toEqual('check');
        expect(component.prop('label')).toBeUndefined();

        const button = component.find('button');
        expect(button.props().className).toBe('todo-button circle');
        
        expect(button.props().children.props.className).toBe('fa fa-check');
        expect(button.find('i').at(0).hasClass('fa fa-check')).toBeTruthy();
        component.unmount();
    })

    test('Verifica se botão foi renderizado e com o icone informado ao passar o icone e o label juntos', () => {
        const component = mount(<Button icon="check" label="Add"/>);
        expect(component.exists()).toBe(true);
        expect(component.prop('icon')).toEqual('check');
        expect(component.prop('label')).toEqual('Add');

        const button = component.find('button');
        expect(button.props().className).toBe('todo-button circle');
        
        expect(button.props().children.props.className).toBe('fa fa-check');
        expect(button.find('i').at(0).hasClass('fa fa-check')).toBeTruthy();
        component.unmount();
    })    

    test('Verifica se botão foi renderizado e com o label informado', () => {
        const component = mount(<Button label="Add"/>);
        expect(component.exists()).toBe(true);
        expect(component.prop('icon')).toBeUndefined();
        expect(component.prop('label')).toEqual('Add');

        const button = component.find('button');
        expect(button.props().className).not.toBe('todo-button circle');

        expect(button.props().children.props.children).toBe('Add');
        expect(button.find('span').at(0).text()).toBe('Add');
        component.unmount();
    })

    test('Verifica se botão foi renderizado e está habilitado ao omitir a propriedade disabled', () => {
        const component = mount(<Button />);
        expect(component.exists()).toBe(true);
        expect(component.prop('disabled')).toBeUndefined();
        component.unmount();
    })

    test('Verifica se botão foi renderizado e está habilitado ao informar a propriedade disabled com false', () => {
        const component = mount(<Button icon="check" disabled={false}/>);
        expect(component.exists()).toBe(true);
        expect(component.prop('disabled')).toEqual(false);
        component.unmount();
    })

    test('Verifica se botão foi renderizado e não está habilitado ao informar a propriedade disabled com true', () => {
        const component = mount(<Button icon="check" disabled={true}/>);
        expect(component.exists()).toBe(true);
        expect(component.prop('disabled')).toEqual(true);
        expect(component.find('button')).toHaveLength(1);

        expect(component.children().props().children.props.disabled).toEqual(true);
        expect(component.find('button').at(0).props().disabled).toEqual(true)
        component.unmount();
    })    

})