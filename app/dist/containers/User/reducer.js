/* @flow */
import { USER_LIST_GET, USER_PHOTO_GET } from './constant';
import type { Action, Store, User } from './type';
import { map } from 'ramda';

export default (state: Store = [], action: Action): Store => {
  switch (action.type) {
    case USER_LIST_GET:
      if (state.length === 0) return action.payload;
      else
        return state.map((x, i) => {
          return {
            ...x,
            id: action.payload[i].id,
            name: action.payload[i].name
          };
        });

    case USER_PHOTO_GET:
      if (state.length === 0) return action.payload;
      else
        return state.map((x, i) => {
          return {
            ...x,
            photo: action.payload[i].photo
          };
        });
    default:
      return state;
  }
};
