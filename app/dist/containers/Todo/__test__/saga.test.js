import { assert } from 'chai';
import { put } from 'redux-saga/effects';
import { TODO_GET_ALL, TODO_GET_BY_USER } from '~/api/todo/constant';
import * as action from '../action';
import Saga from '../saga';

describe('Todo saga', () => {
  it('#TODO_GET_BY_USER', () => {
    const callSaga = res => {
      const gen = Saga[TODO_GET_BY_USER](res);
      return gen;
    };

    const res = [
      {
        title: 'fake title 1',
        completed: true,
        id: 1,
        userId: 1
      },
      {
        title: 'fake title 2',
        completed: false,
        id: 2,
        userId: 1
      }
    ];
    assert.deepEqual(callSaga(res).next().value, put(action.get(res)));
  });
});
