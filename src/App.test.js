import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateContact from './CreateContact';
import ContactList from './ContactList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
});

  it('should render CreateContact correctly', () => {
    const component = shallow(<CreateContact />);
    expect(component).toMatchSnapshot();
});

  it.skip('should render the title correctly', () => {
    const app = shallow(<App />);
    expect(app.find('h2').text()).toEqual('Contacts');
  });

  it('should render the title of CreateContact correctly', () => {
    const app = shallow(<CreateContact />);
    expect(app.find('h3').text()).toEqual('Create Contact');
  });

  it('should check the type of button', () => {
    const wrapper = shallow(<ContactList />);
    expect(wrapper.find('.add-contact'))
  });

});
