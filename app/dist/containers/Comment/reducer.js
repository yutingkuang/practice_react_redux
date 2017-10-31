/* @flow */
import { COMMENTS_GET, POST_GET_BY_ID } from './constant';
import type { Action, Store } from './type';

export default (
  state: Store = {
    comments: [],
    post: {
      userId: 1,
      id: 1,
      title: '',
      body: ''
    }
  },
  action: Action
): Store => {
  switch (action.type) {
    case COMMENTS_GET:
      return {
        comments: action.payload,
        post: state.post
      };
    case POST_GET_BY_ID:
      return {
        comments: state.comments,
        post: action.payload
      };
    default:
      return state;
  }
};
