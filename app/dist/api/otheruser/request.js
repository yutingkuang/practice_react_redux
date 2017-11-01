/* @flow */
import { OTHER_USER_GET_10_WITH_PHOTO } from './constant';
import { replace, toQuery, toString } from '~/helpers/api-params';

export default {
  [OTHER_USER_GET_10_WITH_PHOTO]: () => ({
    other: true,
    method: 'get',
    url:
      'https://randomuser.me/api/?results=10&inc=name,picture&noinfo&nat=us,es'
  })
};
