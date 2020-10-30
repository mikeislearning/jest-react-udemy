import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../test/testUtils';



/**
 * Factory function to create ShallowWrapper for the Congrats component
 *
 * @param {} props
 */

const defaultProps = {
  success: false,
}

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props };
  const thing = shallow(<Congrats { ...setupProps } />);
  return thing;
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');

  expect(component.length).toBe(1)


});

test('renders no text when success prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');

  expect(component.text()).toBe('')


});

test('renders non-empty congrats when success prop is true', () => {
  const wrapper = setup({ success: true });

  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: true };

  const propError = checkProps(Congrats, expectedProps);

  expect(propError).toBeUndefined();

});
