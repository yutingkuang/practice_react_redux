/* @flow */
import { put } from 'redux-saga/effects';

/* constant */
import { API_PHOTO_GET_BY_ALBUM } from '~/api/photo/constant';
import { API_ALBUM_GET_BY_ID } from '~/api/albums/constant';
import { USER_GET_BY_ID } from '~/api/user/constant';

/* action */
import { savePhotos, saveUser, saveAlbum } from './action';

/* type */
import type { Photo } from '~/api/photo/type';
import type { User } from '~/api/user/type';
import type { Album } from '~/api/albums/type';

export default {
  [API_PHOTO_GET_BY_ALBUM]: function*(res: Array<Photo>) {
    yield put(savePhotos(res));
  },

  [USER_GET_BY_ID]: function*(res: User) {
    yield put(saveUser(res));
  },

  [API_ALBUM_GET_BY_ID]: function*(res: Album) {
    yield put(saveAlbum(res));
  }
};
