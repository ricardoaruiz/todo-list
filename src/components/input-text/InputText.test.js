import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import InputText from './InputText'

configure({ adapter: new Adapter() })

describe('Input text tests', () => {

    test('Verifica se o input foi renderizado', () => {
        const component = mount(<InputText />);
        expect(component.exists()).toBe(true);
        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        component.unmount();
    })

    test('Verifica se o input está editavel ao não passar a propriedade readonly', () => {
        const component = mount(<InputText />);
        expect(component.exists()).toBe(true);
        expect(component.props().readOnly).toBeUndefined();

        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        expect(input.props().readOnly).toBeUndefined();      

        component.unmount();
    })

    test('Verifica se o input está editavel ao passar a propriedade readonly como false', () => {
        const component = mount(<InputText readOnly={false}/>);
        expect(component.exists()).toBe(true);
        expect(component.props().readOnly).toBe(false);

        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        expect(input.props().readOnly).toBe(false);      

        component.unmount();
    })

    test('Verifica se o input não editavel ao passar a propriedade readonly como true', () => {
        const component = mount(<InputText readOnly={true}/>);
        expect(component.exists()).toBe(true);
        expect(component.props().readOnly).toBe(true);

        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        expect(input.props().readOnly).toBe(true);      

        component.unmount();
    })

    test('Verifica se o input está habilitado ao não passar a propriedade disabled', () => {
        const component = mount(<InputText />);
        expect(component.exists()).toBe(true);
        expect(component.props().disabled).toBeUndefined()

        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        expect(input.props().disabled).toBeUndefined();

        component.unmount();
    })

    test('Verifica se o input está habilitado ao passar a propriedade disabled como false', () => {
        const component = mount(<InputText disabled={false}/>);
        expect(component.exists()).toBe(true);
        expect(component.props().disabled).toBe(false)

        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        expect(input.props().disabled).toBe(false)

        component.unmount();
    })  
    
    test('Verifica se o input não está habilitado ao passar a propriedade disabled como true', () => {
        const component = mount(<InputText disabled={true}/>);
        expect(component.exists()).toBe(true);
        expect(component.props().disabled).toBe(true)

        const input = component.find('input').at(0);
        expect(input).toHaveLength(1);
        expect(input.props().disabled).toBe(true)

        component.unmount();
    })     
})