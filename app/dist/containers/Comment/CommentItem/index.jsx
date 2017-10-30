/* @flow */
import React from 'react';
import { applyStylesInline } from '../../../core/css-module';

export const CommentComp: any = (props: any) => {
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
