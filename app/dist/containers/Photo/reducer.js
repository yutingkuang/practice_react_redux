/* @flow */
import { ALBUM_PHOTOS_GET, USER_GET, ALBUM_GET } from './constant';
import type { Action, Store } from './type';

export default (
  state: Store = {
    photos: [],
    user: { id: 0, name: '' },
    album: { userId: 0, id: 0, title: '' }
  },
  action: Action
): Store => {
  switch (action.type) {
    case ALBUM_PHOTOS_GET:
      return {
        ...state,
        photos: action.payload
      };
    case USER_GET:
      return {
        ...state,
        user: action.payload
      };
    case ALBUM_GET:
      return {
        ...state,
        album: action.payload
      };
    default:
      return state;
  }
};
