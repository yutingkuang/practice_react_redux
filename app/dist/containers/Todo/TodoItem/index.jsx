import React, { Component, PureComponent } from 'react';
import { applyStyles } from '../../../core/css-module';
import style from './stylesheets/style.scss';
/* type */
import type { TodoItem } from '../type';
import type { State } from './type';

@applyStyles(style)
export default class View extends PureComponent<void, Props, State> {
  state: State = {
    modify: false
  };
  props: Props;

  /**
   * input element onKeyPress event
   */
  eventHandler = (todo: TodoItem) => (e: Event) => {
    if (e.charCode === 13) {
      /* 按下 enter 執行 */
      const { updateHandler } = this.props;
      updateHandler({ ...todo, title: e.target.value });
      e.target.blur();
    }
  };

  /**
   * completed edit
   * @param completed {boolean}
   */
  completeHandler = (todo: TodoItem) => () => {
    const { updateHandler } = this.props;
    updateHandler({ ...todo, completed: !todo.completed });
  };

  /**
   * 顯示狀態切換
   */
  toggleModify = () => {
    this.setState({ modify: !this.state.modify });
  };

  render() {
    // console.log('todocom',this.props);
    const { todo, todo: { title, completed }, removeHandler } = this.props;
    const { modify } = this.state;
    return (
      <li>
        {modify ? (
          <input
            type="text"
            styleName="form-control"
            defaultValue={title}
            onBlur={this.toggleModify}
            onKeyPress={this.eventHandler(todo)}
          />
        ) : (
          [
            <input
              key="todo-completed"
              styleName="toggle"
              type="checkbox"
              checked={completed}
              onChange={this.completeHandler(todo)}
            />,
            <span key="todo-title" onClick={this.toggleModify}>
              {title}
            </span>,
            <button
              key="todo-remove"
              styleName="btn btn-sm btn-danger pull-right"
              onClick={removeHandler}>
              X
            </button>
          ]
        )}
      </li>
    );
  }
}
