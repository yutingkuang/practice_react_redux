/* @flow */
import { put } from 'redux-saga/effects';

/* constant */
import { API_ALBUM_GET_BY_USER } from '~/api/albums/constant';
import { USER_GET_BY_ID } from '~/api/user/constant';

/* action */
import { saveAlbums, saveUser } from './action';

/* type */
import type { Album } from '~/api/albums/type';
import type { User } from '~/api/user/type';

export default {
  [API_ALBUM_GET_BY_USER]: function*(res: Array<Album>) {
    yield put(saveAlbums(res));
  },

  [USER_GET_BY_ID]: function*(res: User) {
    yield put(saveUser(res));
  }
};
