/* @flow */
import React from 'react';
import { applyStylesInline } from '../../../core/css-module';

export const PostComp: any = (props: any) => {
  const { post, index } = props;
  return (
    <div styleName="panel panel-default">
      <div styleName="panel-body">
        #{index} {post.title}
        <span styleName="pull-right">By {post.userId}</span>
      </div>
      <div styleName="panel-footer">
        {post.body}
        <span styleName="pull-right">
          <a href={`/post/${post.id}/comments`}>...detail</a>
        </span>
      </div>
    </div>
  );
};
export default applyStylesInline()(PostComp);
