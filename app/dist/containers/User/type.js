/* @flow */
import type { DispatchProps } from '../../core/container/hoc/dispatch';
import type { StoreProps } from '../../core/container/hoc/store.jsx';
/**
 * 2. constant type
 */
export type LIST_GET = 'USER_LIST_GET';
export type PHOTO_GET = 'USER_PHOTO_GET';

/**
 * 3. action type
 */
export type UserListAction = { type: LIST_GET, payload: Array<User> };
export type UserPhotoAction = { type: PHOTO_GET, payload: Array<User> };

export type Action = UserListAction | UserPhotoAction;

export type User = {
  id: number,
  name: string,
  photo: string
};
/**
 * 1. store type
 */
export type Store = Array<User>;

/**
 * 4. component
 */

export type Props = DispatchProps & StoreProps<Store>;
