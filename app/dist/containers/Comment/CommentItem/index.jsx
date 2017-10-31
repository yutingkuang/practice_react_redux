/* @flow */
import React from 'react';
import { applyStylesInline } from '../../../core/css-module';
import type { Props } from './type.js';

export const CommentComp: any = (props: Props) => {
  const { comment } = props;
  return (
    <div styleName="panel panel-info">
      <div styleName="panel-body">
        {comment.name}
        <span styleName="pull-right">{comment.email}</span>
      </div>
      <div styleName="panel-footer">{comment.body}</div>
    </div>
  );
};

export default applyStylesInline()(CommentComp);
