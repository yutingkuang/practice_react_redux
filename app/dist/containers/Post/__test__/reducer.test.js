import reducer from '../reducer';
import { POST_GET } from '../constant';
import { expect } from 'chai';

describe('Post reducer', () => {
  const mockPosts = [];
  const mockStore = {
    posts: mockPosts
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({ posts: [] });
  });

  it('should handle TODO_GET', () => {
    expect(
      reducer([], {
        type: POST_GET,
        payload: mockPosts
      })
    ).to.deep.equal(mockStore);
  });
});
