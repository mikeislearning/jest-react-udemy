import { actionTypes } from '../actions';
import successReducer from './successReducer';
/**
/**
 * default.
 *
 * @param {} state - currect success state
 * @param {} action - action to be reduced
 */

describe('Success reducer', () => {
  test('return default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });


});
