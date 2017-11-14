/* @flow */
import type { DispatchProps } from '../../core/container/hoc/dispatch';
import type { StoreProps } from '../../core/container/hoc/store.jsx';

/**
 * 2. constant type
 */
export type TYPE_USER_ALLBUMS_GET = 'USER_ALLBUMS_GET';
export type TYPE_USER_GET = 'USER_GET';

/**
 * 3. action type
 */
export type UserAlbumsAction = {
  type: TYPE_USER_ALLBUMS_GET,
  payload: Array<Album>
};

export type UserAction = {
  type: TYPE_USER_GET,
  payload: User
};

export type Action = UserAlbumsAction;

export type Album = {
  userId: number,
  id: number,
  title: string
};

export type User = {
  id: number,
  name: string
};

/**
 * 1. store type
 */
export type Store = {
  albums: Array<Album>,
  user: User
};

/**
 * 4. component
 */
type MatchProps = {
  match: {
    params: {
      userId: string
    }
  }
};

export type Props = DispatchProps & StoreProps<Store> & MatchProps;
