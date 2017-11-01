/* @flow */
import { put } from 'redux-saga/effects';

/* constant */
import { USER_GET } from '~/api/user/constant';
import { OTHER_USER_GET_10_WITH_PHOTO } from '~/api/otheruser/constant';

/* action */
import { saveList, savePhoto } from './action';

/* type */
import type { User } from '~/api/user/type';
import type { OtherUsers } from '~/api/otheruser/type';

export default {
  [USER_GET]: function*(res: Array<User>) {
    yield put(
      saveList(
        res.map(x => {
          return { ...x, photo: '' };
        })
      )
    );
  },

  [OTHER_USER_GET_10_WITH_PHOTO]: function*(res: OtherUsers) {
    yield put(
      savePhoto(
        res.results.map(x => {
          return { id: 0, name: '', photo: x.picture.thumbnail };
        })
      )
    );
  }
};
