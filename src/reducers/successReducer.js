import { actionTypes } from '../actions';
/**
 * default.
 *
 * @param {} state - array of guessed words
 * @param {} action
 */
export default (state = false, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
}
