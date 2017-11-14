import { assert } from 'chai';
import { put } from 'redux-saga/effects';
import { POST_GET_ALL } from '~/api/post/constant';
import * as action from '../action';
import Saga from '../saga';

describe('Post saga', () => {
  it('#POST_GET_ALL', () => {
    const callSaga = res => {
      const gen = Saga[POST_GET_ALL](res);
      return gen;
    };

    const res = [
      {
        userId: 1,
        id: 1,
        title: 'fake title 1',
        body: 'fake body 1'
      },
      {
        userId: 1,
        id: 2,
        title: 'fake title 2',
        body: 'fake body 2'
      }
    ];

    assert.deepEqual(callSaga(res).next().value, put(action.save(res)));
  });
});
