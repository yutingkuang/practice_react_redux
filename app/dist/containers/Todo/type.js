/* @flow */
import type { DispatchProps } from '../../core/container/hoc/dispatch';
import type { StoreProps } from '../../core/container/hoc/store.jsx';
/**
 * constant type
 */
export type GET = 'TODO_GET';
export type REMOVE = 'TODO_REMOVE';
export type UPDATE = 'TODO_UPDATE';
export type ADD = 'TODO_ADD';

/**
 * action type
 */
export type Action = { type: GET, payload: Array<TodoItem> };

/**
 * todo item
 */
export type TodoItem = {
  title: string,
  completed: boolean,
  id: number,
  userId: number
};

/**
 * store type
 */
export type Store = Array<TodoItem>;

/**
 * component
 */
export type State = {
  todos: Array<TodoItem>
};

export type Props = DispatchProps & StoreProps<Store>;
