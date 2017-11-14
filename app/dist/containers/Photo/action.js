/* @flow */
/* constant */
import { API_PHOTO_GET_BY_ALBUM } from '~/api/photo/constant';
import { API_ALBUM_GET_BY_ID } from '~/api/albums/constant';
import { USER_GET_BY_ID } from '~/api/user/constant';
import { ALBUM_PHOTOS_GET, USER_GET, ALBUM_GET } from './constant';

/* helpers */
import { fetchApi } from '~/helpers/fetch';

/* type */
import type {
  AlbumPhotosAction,
  UserAction,
  AlbumAction,
  User,
  Photo,
  Album
} from './type';

export function fetchPhotosByAlbum(id: number) {
  return fetchApi(API_PHOTO_GET_BY_ALBUM, id);
}

export function fetchUserById(id: number) {
  return fetchApi(USER_GET_BY_ID, id);
}

export function fetchAlbumById(id: number) {
  return fetchApi(API_ALBUM_GET_BY_ID, id);
}

export function savePhotos(data: Array<Photo>): AlbumPhotosAction {
  return {
    type: ALBUM_PHOTOS_GET,
    payload: data
  };
}

export function saveUser(data: User): UserAction {
  return {
    type: USER_GET,
    payload: data
  };
}

export function saveAlbum(data: Album): AlbumAction {
  return {
    type: ALBUM_GET,
    payload: data
  };
}
