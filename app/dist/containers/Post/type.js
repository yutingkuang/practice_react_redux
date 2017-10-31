/* @flow */
import type { DispatchProps } from '../../core/container/hoc/dispatch';
import type { StoreProps } from '../../core/container/hoc/store.jsx';
/**
 * constant type
 */
export type GET = 'POST_GET';

/**
 * action type
 */
export type Action = { type: GET, payload: Array<Post> };

/**
 * post item
 */
export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
};

export type Page = {
  perItem: number,
  nowPage: number,
  pages: Array<number>,
  nowList: Array<Post>
};

/**
 * store type
 */
export type Store = {
  posts: Array<Post>
};

/**
 * component
 */
export type State = {
  posts: Array<Post>,
  pagination: Page,
  perItemList: Array<number>
};

export type Props = DispatchProps & StoreProps<Store>;
