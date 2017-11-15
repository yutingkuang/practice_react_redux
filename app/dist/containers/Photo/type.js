/* @flow */
import type { DispatchProps } from '../../core/container/hoc/dispatch';
import type { StoreProps } from '../../core/container/hoc/store.jsx';
import type { Store as AlbumStore } from '../Album/type';
/**
 * 2. constant type
 */
export type TYPE_ALBUM_PHOTOS_GET = 'ALBUM_PHOTOS_GET';
export type TYPE_USER_GET = 'USER_GET';
export type TYPE_ALBUM_GET = 'ALBUM_GET';

/**
 * 3. action type
 */
export type AlbumPhotosAction = {
  type: TYPE_ALBUM_PHOTOS_GET,
  payload: Array<Photo>
};

export type UserAction = {
  type: TYPE_USER_GET,
  payload: User
};

export type AlbumAction = {
  type: TYPE_ALBUM_GET,
  payload: Album
};

export type Action = AlbumPhotosAction | UserAction | AlbumAction;

export type Photo = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
};

export type User = {
  id: number,
  name: string
};

export type Album = {
  userId: number,
  id: number,
  title: string
};

/**
 * 1. store type
 */
export type Store = {
  photos: Array<Photo>,
  user: User,
  album: Album
};

/**
 * 4. component
 */
export type State = {
  lightboxIsOpen: boolean,
  currentImage: number
};

type MatchProps = {
  match: {
    params: {
      userId: string,
      albumId: string
    }
  }
};

export type Props = DispatchProps &
  StoreProps<Store> &
  MatchProps &
  StoreProps<Store>;
