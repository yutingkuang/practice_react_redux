/* @flow */
import { USER_GET, USER_GET_BY_ID } from './constant';

export default {
  [USER_GET]: () => ({
    method: 'get',
    url: '/users'
  }),

  [USER_GET_BY_ID]: (id: number) => ({
    method: 'get',
    url: `/users/${id}`
  })
};
