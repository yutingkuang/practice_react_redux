/* @flow */
import { put } from 'redux-saga/effects';

/* constant */
import { API_POST_GET_BY_ID } from '~/api/post/constant';
import { COMMENT_GET_BY_ID } from '~/api/comment/constant';

/* action */
import { getComment, getPost } from './action';

/* type */
import type { Post } from '~/api/post/type';
import type { Comment } from '~/api/comment/type';

export default {
  [API_POST_GET_BY_ID]: function*(res: Post) {
    yield put(getPost(res));
  },
  [COMMENT_GET_BY_ID]: function*(res: Array<Comment>) {
    yield put(getComment(res));
  }
};
