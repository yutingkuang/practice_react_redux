/* @flow */
import { POST_GET } from './constant';
import type { Action, Store, Post } from './type';
import { slice, times, identity, append, clone } from 'ramda';

export default (
  state: Store = {
    posts: [],
    pagination: {
      perItem: 10,
      nowPage: 1,
      pages: [],
      nowList: []
    }
  },
  action: Action
): Store => {
  switch (action.type) {
    case POST_GET:
      const length = action.payload.length;
      const { perItem } = state.pagination;
      return {
        posts: action.payload,
        pagination: {
          perItem: perItem,
          nowPage: state.pagination.nowPage,
          pages: times(
            identity,
            length % perItem === 0
              ? length / perItem
              : parseInt(length / perItem + 1)
          ),
          nowList: action.payload.slice(0, perItem)
        }
      };
    default:
      return state;
  }
};
