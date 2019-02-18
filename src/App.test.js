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
});
