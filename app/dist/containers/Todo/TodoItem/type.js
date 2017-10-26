/* @flow */
import type { TodoItem } from '../type';
/**
 * view's props type
 */
export type Props = {
  todo: TodoItem,
  removeHandler: () => void,
  updateHandler: (todo: TodoItem) => void
};
/**
 * view's state type
 * modify [啟用編輯狀態]
 */
export type State = {
  modify: boolean
};
