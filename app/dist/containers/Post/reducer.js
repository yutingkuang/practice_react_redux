/* @flow */
import { POST_GET } from './constant';
import type { Action, Store, Post } from './type';

export default (
  state: Store = {
    posts: []
  },
  action: Action
): Store => {
  switch (action.type) {
    case POST_GET:
      return { posts: action.payload };
    default:
      return state;
  }
};
