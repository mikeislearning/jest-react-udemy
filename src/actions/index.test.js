import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    console.log('this shows up');

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      console.log('this does not');
      request.respondWith({
        status: 200,
        response: secretWord,
      });

      return store.dispatch(getSecretWord()).then(() => {
        console.log('this does not show up either');
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });


    });

  });
});
