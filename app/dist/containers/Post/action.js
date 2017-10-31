/* @flow */
/* constant */
import { POST_GET_ALL } from '~/api/post/constant';
import { POST_GET } from './constant';

/* helpers */
import { fetchApi } from '~/helpers/fetch';

/* type */
import type { Action, Post } from './type';

export function fetchPost() {
  return fetchApi(POST_GET_ALL);
}

export function save(data: Array<Post>): Action {
  return {
    type: POST_GET,
    payload: data
  };
}
