import React from 'react';
import PropTypes from 'prop-types';

import { shallow } from 'Enzyme';
import { findByTestAttr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords { ...setupProps} />);
}


test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
})

describe ('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  })

  test('renders without error', () => {
    // const wrapper = setup({ guessedWords: []});
    const component = findByTestAttr(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  })

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
    // const setup = wrapper();
  })

});

describe ('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  })

  test('renders guessed words section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  });

});
