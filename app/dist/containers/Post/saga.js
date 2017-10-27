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
  [POST_GET_ALL]: function*(res: Array<Post>) {
    yield put(get(res));
  }
};
