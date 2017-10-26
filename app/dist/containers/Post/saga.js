/* @flow */
import { put } from 'redux-saga/effects';

/* constant */
import { POST_GET_ALL } from '~/api/post/constant';
// import { STORE_KEY } from './constant';

/* action */
import { get } from './action';

/* type */
import type { Post } from '~/api/post/type';

export default {
  /* 抓取特定 user 的 todos */
  [POST_GET_ALL]: function*(res: Array<Post>) {
    /* 使用 put 來呼叫 action 寫入取得的資料 */
    yield put(get(res));
  }
};
