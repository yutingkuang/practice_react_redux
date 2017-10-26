/* @flow */
import React, { PureComponent } from 'react';
import { applyStyles } from '../../../core/css-module';

@applyStyles()
export default class View extends PureComponent {
  render() {
    const { post, index } = this.props;
    return (
      <div styleName="panel panel-info">
        <div styleName="panel-body">
          #{index} {post.title}
          <span styleName="pull-right">By {post.userId}</span>
        </div>
        <div styleName="panel-footer">{post.body}</div>
      </div>
    );
  }
}
