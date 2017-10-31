/* @flow */
import { POST_GET_ALL, API_POST_GET_BY_ID } from './constant';
import { replace, toQuery, toString } from '~/helpers/api-params';

export default {
  [POST_GET_ALL]: () => ({
    method: 'get',
    url: '/posts'
  }),

  [API_POST_GET_BY_ID]: (id: number) => ({
    method: 'get',
    url: `/posts/${id}`
  })
};
