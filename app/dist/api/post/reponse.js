/* @flow */
import type { Post } from './type';

import { POST_GET_ALL } from './constant';

export default {
  [POST_GET_ALL]: (res: Object): Array<Post> =>
    res.map(({ userId, id, title, body }) => ({
      userId,
      id,
      title,
      body
    }))
};
