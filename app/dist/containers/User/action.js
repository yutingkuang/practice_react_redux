/* @flow */
/* constant */
import { USER_GET } from '~/api/user/constant';
import { OTHER_USER_GET_10_WITH_PHOTO } from '~/api/otheruser/constant';
import { USER_LIST_GET, USER_PHOTO_GET } from './constant';

/* helpers */
import { fetchApi } from '~/helpers/fetch';

/* type */
import type { UserListAction, UserPhotoAction, User } from './type';

export function fetchUsers() {
  return fetchApi(USER_GET);
}

export function fetchPhotos() {
  return fetchApi(OTHER_USER_GET_10_WITH_PHOTO);
}

export function saveList(data: Array<User>): UserListAction {
  return {
    type: USER_LIST_GET,
    payload: data
  };
}

export function savePhoto(data: Array<User>): UserPhotoAction {
  return {
    type: USER_PHOTO_GET,
    payload: data
  };
}
