/* @flow */
import { USER_ALLBUMS_GET, USER_GET } from './constant';
import type { Action, Store } from './type';

export default (
  state: Store = {
    albums: [],
    user: { id: 0, name: '' }
  },
  action: Action
): Store => {
  switch (action.type) {
    case USER_ALLBUMS_GET:
      return {
        ...state,
        albums: action.payload
      };
    case USER_GET:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
