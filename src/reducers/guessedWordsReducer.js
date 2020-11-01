import { actionTypes } from '../actions';
/**
 * default.
 *
 * @param {} state
 * @param {} action
 */
export default (state = [], action) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
