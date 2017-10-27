/* @flow */
/* constant */
import { API_POST_GET_BY_ID } from '~/api/post/constant';
import { COMMENT_GET_BY_ID } from '~/api/comment/constant';
import { COMMENTS_GET, POST_GET_BY_ID } from './constant';

/* helpers */
import { fetchApi } from '~/helpers/fetch';

/* type */
import type { CommentAction, PostAction, Comment } from './type';
import type { Post } from '../Post/type';

export function fetchPostById(id: number) {
  return fetchApi(API_POST_GET_BY_ID, id);
}

export function fetchCommentByPostId(id: number) {
  return fetchApi(COMMENT_GET_BY_ID, id);
}

export function getComment(data: Array<Comment>): CommentAction {
  return {
    type: COMMENTS_GET,
    payload: data
  };
}

export function getPost(data: Post): PostAction {
  return {
    type: POST_GET_BY_ID,
    payload: data
  };
}
