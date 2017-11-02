/* @flow */
export type Photos = {
  results: Array<Photo>
};

export type Photo = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
};
