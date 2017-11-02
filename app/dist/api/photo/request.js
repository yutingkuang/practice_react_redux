/* @flow */
import { API_PHOTO_GET_ALL, API_PHOTO_GET_BY_ALBUM } from './constant';
import { replace, toQuery, toString } from '~/helpers/api-params';

export default {
  [API_PHOTO_GET_ALL]: () => ({
    method: 'get',
    url: '/photos'
  }),

  [API_PHOTO_GET_BY_ALBUM]: (albumId: number) => ({
    method: 'get',
    url: '/photos?' + toQuery({ albumId })
  })
};
