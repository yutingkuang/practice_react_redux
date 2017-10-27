/* @flow */
import type { DispatchProps } from '../../core/container/hoc/dispatch';
import type { StoreProps } from '../../core/container/hoc/store.jsx';
import type { Post } from '../Post/type';

/**
 * constant type
 */
export type CGET = 'COMMENTS_GET';
export type PGET = 'POST_GET_BY_ID';

/**
 * action type
 */
export type CommentAction = { type: CGET, payload: Array<Comment> };
export type PostAction = { type: PGET, payload: Post };

export type Action = CommentAction | PostAction;
/**
 * comment item
 */
export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
};

/**
 * store type
 */
export type Store = {
  comments: Array<Comment>,
  post: Post
};

/**
 * component
 */
export type State = {
  comments: Array<Comment>,
  post: Post
};

type MatchProps = {
  match: {
    params: {
      id: string
    }
  }
};

export type Props = DispatchProps & StoreProps & MatchProps;
