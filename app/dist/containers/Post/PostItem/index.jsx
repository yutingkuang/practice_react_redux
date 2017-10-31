/* @flow */
import React from 'react';
import { applyStylesInline } from '../../../core/css-module';

export const PostComp: any = (props: any) => {
  const { post: { id, title, userId, body }, index } = props;
  return (
    <div styleName="panel panel-default">
      <div styleName="panel-body">
        #{index} {title}
        <span styleName="pull-right">By {userId}</span>
      </div>
      <div styleName="panel-footer">
        {body}
        <span styleName="pull-right">
          <a href={`/post/${id}/comments`}>...detail</a>
        </span>
      </div>
    </div>
  );
};
export default applyStylesInline()(PostComp);
