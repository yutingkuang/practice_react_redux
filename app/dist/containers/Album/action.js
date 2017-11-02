/* @flow */
/* constant */
import { API_ALBUM_GET_BY_USER } from '~/api/albums/constant';
import { USER_ALLBUMS_GET } from './constant';

/* helpers */
import { fetchApi } from '~/helpers/fetch';

/* type */
import type { UserAlbumsAction, Album } from './type';

export function fetchAlbumsByUser(id: number) {
  return fetchApi(API_ALBUM_GET_BY_USER, id);
}

export function saveAlbums(data: Array<Album>): UserAlbumsAction {
  return {
    type: USER_ALLBUMS_GET,
    payload: data
  };
}
