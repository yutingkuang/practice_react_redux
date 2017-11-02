/* @flow */
import { put } from 'redux-saga/effects';

/* constant */
import { API_ALBUM_GET_BY_USER } from '~/api/albums/constant';

/* action */
import { saveAlbums } from './action';

/* type */
import type { Album } from '~/api/albums/type';

export default {
  [API_ALBUM_GET_BY_USER]: function*(res: Array<Album>) {
    yield put(saveAlbums(res));
  }
};
