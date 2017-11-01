/* @flow */
export type OtherUsers = {
  results: Array<OtherUser>
};

export type OtherUser = {
  name: {
    title: string,
    first: string,
    last: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
};
