/* @flow */
import { COMMENT_GET_BY_ID } from './constant';
import { replace, toQuery, toString } from '~/helpers/api-params';

export default {
  [COMMENT_GET_BY_ID]: (postId: number) => ({
    method: 'get',
    url: '/comments?' + toQuery({ postId })
  })
};
