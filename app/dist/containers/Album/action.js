/* @flow */
/* constant */
import { API_ALBUM_GET_BY_USER } from '~/api/albums/constant';
import { USER_GET_BY_ID } from '~/api/user/constant';
import { USER_ALLBUMS_GET, USER_GET } from './constant';

/* helpers */
import { fetchApi } from '~/helpers/fetch';

/* type */
import type { UserAlbumsAction, UserAction, User, Album } from './type';

export function fetchAlbumsByUser(id: number) {
  return fetchApi(API_ALBUM_GET_BY_USER, id);
}

export function fetchUserById(id: number) {
  return fetchApi(USER_GET_BY_ID, id);
}

export function saveAlbums(data: Array<Album>): UserAlbumsAction {
  return {
    type: USER_ALLBUMS_GET,
    payload: data
  };
}

export function saveUser(data: User): UserAction {
  return {
    type: USER_GET,
    payload: data
  };
}
