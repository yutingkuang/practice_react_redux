/* @flow */
import { TODO_GET, TODO_REMOVE, TODO_UPDATE, TODO_ADD } from './constant';
import type { Action, Store } from './type';
import { slice } from 'ramda';

export default (state: Store = [], action: Action): Store => {
  switch (action.type) {
    case TODO_GET:
      return action.payload;
    case TODO_REMOVE:
      // console.log('TODO_REMOVE', state, action);
      return state.filter(todo => todo.id !== action.payload);
    case TODO_UPDATE:
      const edit_todo = action.payload;
      // console.log('TODO_UPDATE', state, action);
      return state.map(todo => (todo.id !== edit_todo.id ? todo : edit_todo));
    case TODO_ADD:
      let new_state = slice(0, state.length, state);
      new_state.push({
        title: action.payload,
        completed: false,
        id: state[state.length - 1].id + 1,
        userId: 1
      });
      return new_state;
    default:
      return state;
  }
};
