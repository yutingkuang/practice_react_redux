/* @flow */
import { USER_ALLBUMS_GET } from './constant';
import type { Action, Store, Album } from './type';

export default (state: Store = [], action: Action): Store => {
  switch (action.type) {
    case USER_ALLBUMS_GET:
      return action.payload;
    default:
      return state;
  }
};
