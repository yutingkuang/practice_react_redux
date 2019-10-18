import { expect } from 'chai';
import { TODO_GET, TODO_REMOVE, TODO_UPDATE, TODO_ADD } from '../constant';
import * as actions from '../action';

describe('Todo actions', () => {
  it('should create an action to get a todo', () => {
    const TodoItems = [];
    const expectedAction = {
      type: TODO_GET,
      payload: TodoItems
    };
    expect(actions.get(TodoItems)).to.deep.equal(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const id = 1;
    const expectedAction = {
      type: TODO_REMOVE,
      payload: id
    };
    expect(actions.remove(id)).to.deep.equal(expectedAction);
  });

  it('should create an action to update a todo', () => {
    const todo = {};
    const expectedAction = {
      type: TODO_UPDATE,
      payload: todo
    };
    expect(actions.update(todo)).to.deep.equal(expectedAction);
  });

  it('should create an action to add a todo', () => {
    const value = '';
    const expectedAction = {
      type: TODO_ADD,
      payload: value
    };
    expect(actions.add(value)).to.deep.equal(expectedAction);
  });
});
