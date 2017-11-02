/* @flow */
import {
  API_ALBUM_GET_BY_USER,
  API_ALBUM_GET_BY_ID,
  API_ALBUM_GET_ALL
} from './constant';
import { replace, toQuery, toString } from '~/helpers/api-params';

export default {
  [API_ALBUM_GET_ALL]: () => ({
    method: 'get',
    url: '/albums'
  }),

  [API_ALBUM_GET_BY_ID]: (id: number) => ({
    method: 'get',
    url: `/albums/${id}`
  }),

  [API_ALBUM_GET_BY_USER]: (userId: number) => ({
    method: 'get',
    url: '/albums?' + toQuery({ userId })
  })
};
