/* @flow */
import { POST_GET_ALL } from './constant';
import { replace, toQuery, toString } from '~/helpers/api-params';

export default {
  [POST_GET_ALL]: () => ({
    method: 'get',
    url: '/posts'
  })
};
