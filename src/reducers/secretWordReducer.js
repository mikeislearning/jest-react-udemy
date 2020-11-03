import { actionTypes } from '../actions';

/**
 * default.
 *
 * @param {} state
 * @param {} action
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}
