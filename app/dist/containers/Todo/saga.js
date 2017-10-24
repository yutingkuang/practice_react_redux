/* @flow */
import { put, select } from 'redux-saga/effects';

/* constant */
import { TODO_GET_ALL, TODO_GET_BY_USER } from '~/api/todo/constant';

/* action */
import { get } from './action';

/* type */
import type { TodoItem } from '~/api/todo/type';

export default {
  /* 抓取特定 user 的 todos */
  [TODO_GET_ALL]: function*(res: Array<TodoItem>) {
    /* 使用 put 來呼叫 action 寫入取得的資料 */
    yield put(get(res));
  },
  /* 抓取特定 user 的 todos */
  [TODO_GET_BY_USER]: function*(res: Array<TodoItem>) {
    /* 使用 put 來呼叫 action 寫入取得的資料 */
    yield put(get(res));
  }
};
