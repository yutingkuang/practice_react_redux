/* @flow */
import React, { Component } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';
/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchByAll, remove, update, add } from './action';

/* component */
import TodoComp from './TodoItem';

/* helper */
import { ArrayEqual } from '~/helpers/equal';
import { compose } from 'ramda';

/* type */
import type { Props, State, TodoItem } from './type';

@applyStyles(style)
export class View extends Component<void, Props, State> {
  props: Props;
  state: State = {
    todos: []
  };

  btnFetch = () => {
    this.props.dispatch(fetchByAll());
    this.saveToState(this.props.storeData);
  };

  /**
   * 移除項目
   * @param id
   * @return () => void
   */
  removeHandler = (id: number) => () => {
    const todos = this.props.storeData;
    this.props.dispatch(remove(id));
  };

  updateHandler = () => (todo: TodoItem) => {
    this.props.dispatch(update(todo));
  };

  insertHandler = (e: any) => {
    if (e.charCode === 13) {
      /* 按下 enter 執行 */
      this.props.dispatch(add(e.target.value));
      e.target.value = '';
    }
  };

  /**
   * 更新 state.todos
   * @param todos
   */
  saveToState = (todos: Array<TodoItem>) => {
    this.setState({ todos });
  };

  componentWillReceiveProps(nextProps: any) {
    /* 資料有變更的時候更新 */
    this.saveToState(nextProps.storeData);
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    /* 比對 state.todos 資料有沒有改變，有的話回傳 true */
    return !ArrayEqual(this.state.todos, nextState.todos);
  }

  render() {
    const { todos } = this.state;
    return (
      <div styleName="container">
        <div styleName="page-header">
          <h1 styleName="text-center">
            todos
            <button styleName="btn btn-sm btn-default" onClick={this.btnFetch}>
              Fetch
            </button>
          </h1>
          <input
            type="text"
            styleName="form-control"
            placeholder="What needs to be done?"
            onKeyPress={this.insertHandler}
          />
          <ul styleName="todo-list">
            {todos.length > 0 ? (
              todos.map(todo => (
                <TodoComp
                  key={`todo-item-${todo.id}`}
                  todo={todo}
                  removeHandler={this.removeHandler(todo.id)}
                  updateHandler={this.updateHandler()}
                />
              ))
            ) : (
              <li> Empty ! (Please Fetch First)</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
