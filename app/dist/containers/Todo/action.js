/* @flow */
import { TODO_GET, TODO_REMOVE, TODO_UPDATE, TODO_ADD } from './constant';
import type { TodoItem, Action } from './type';
import { fetchApi } from '~/helpers/fetch';
import { TODO_GET_BY_USER } from '~/api/todo/constant';

/**
 * 抓取所有 的 todos
 * @returns {object}
 */
export function fetchByAll() {
  return fetchApi(TODO_GET_BY_USER, 1);
}

/**
 * 儲存 todos
 * @param data  {Array<TodoData>} [todos 資料]
 * @returns {{type: SAVE, payload: Array<TodoData>}}
 */
export function get(data: Array<TodoItem>): Action {
  return {
    type: TODO_GET,
    payload: data
  };
}

/**
 * 移除某筆 todo
 * @param id  {number}  [todo's id]
 * @returns {*}
 */
export function remove(id: number): Action {
  return {
    type: TODO_REMOVE,
    payload: id
  };
}

export function update(todo: TodoItem): Action {
  return {
    type: TODO_UPDATE,
    payload: todo
  };
}

export function add(value: string): Action {
  return {
    type: TODO_ADD,
    payload: value
  };
}
