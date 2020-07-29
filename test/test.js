import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const StepBar = require('../src/StepBar/StepBar.jsx').default;

Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');


console.warn = ()=>{}

var array = [
	{label:"A"},
	{label:"B"},
	{label:"C"}
]


describe('test', () => {
	
	test('test:1', () => {
		let wrapper = (mount(<StepBar index={0} array={array} />));
		
		expect(wrapper.find('li').at(0).hasClass('active')).toBe(true);
		expect(wrapper.find('li').at(1).hasClass('active')).toBe(false);
		expect(wrapper.find('li').at(2).hasClass('active')).toBe(false);
		
		
		wrapper.setProps({index: 1});	
		expect(wrapper.find('li').at(0).hasClass('active')).toBe(false);
		expect(wrapper.find('li').at(1).hasClass('active')).toBe(true);
		expect(wrapper.find('li').at(2).hasClass('active')).toBe(false);
				
		
		wrapper.setProps({index: 2});	
		expect(wrapper.find('li').at(0).hasClass('active')).toBe(false);
		expect(wrapper.find('li').at(1).hasClass('active')).toBe(false);
		expect(wrapper.find('li').at(2).hasClass('active')).toBe(true);
	
    });
	
});









