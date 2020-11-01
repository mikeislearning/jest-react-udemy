export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

/**
 * correctGuess.
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
