import { expect } from 'chai';
import { POST_GET } from '../constant';
import * as actions from '../action';

describe('Post actions', () => {
  it('should create an action to get posts', () => {
    const Posts = [];
    const expectedAction = {
      type: POST_GET,
      payload: Posts
    };
    expect(actions.save(Posts)).to.deep.equal(expectedAction);
  });
});
