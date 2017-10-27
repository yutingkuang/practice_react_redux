/* @flow */
import React, { PureComponent } from 'react';
import { applyStyles } from '../../../core/css-module';

@applyStyles()
export default class View extends PureComponent {
  render() {
    const { comment } = this.props;
    return (
      <div styleName="panel panel-info">
        <div styleName="panel-body">
          {comment.name}
          <span styleName="pull-right">{comment.email}</span>
        </div>
        <div styleName="panel-footer">{comment.body}</div>
      </div>
    );
  }
}
