/* @flow */
import React, { Component } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';

/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchPostById, fetchCommentByPostId } from './action';

/* component */
import CommentComp from './CommentItem';
import PostComp from '../Post/PostItem';

/* helper */
import { ObjectEqual } from '~/helpers/equal';
import { compose } from 'ramda';

/* type */
import type { Props, State } from './type';

@applyStyles(style)
export class View extends Component<void, Props, State> {
  props: Props;
  state: State = {
    post: {
      userId: 1,
      id: 1,
      title: '',
      body: ''
    },
    comments: []
  };

  saveToState = (state: State) => {
    this.setState(state);
  };

  componentWillReceiveProps(nextProps: any) {
    /* 資料有變更的時候更新 */
    this.saveToState(nextProps.storeData);
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    /* 比對 state.todos 資料有沒有改變，有的話回傳 true */
    return !ObjectEqual(this.state, nextState);
  }

  componentWillMount() {
    /* 渲染前就撈成員資料 */
    const { match } = this.props;
    const id = parseInt(match.params.id);
    this.props.dispatch([fetchPostById(id), fetchCommentByPostId(id)]);
  }

  render() {
    const { post, comments } = this.state;
    return (
      <div styleName="container">
        <h5 styleName="pull-left">
          <a href="/post">go back</a>
        </h5>
        <div aria-label="Post" styleName="center">
          <h3>{post.title}</h3>
          <span styleName="label label-primary pull-right">
            By {post.userId}
          </span>
          <div styleName="article">{post.body}</div>
        </div>
        <h4>Comment</h4>
        <div>
          {comments.map((c, i) => (
            <CommentComp key={`comment-item-${c.id}`} comment={c} index={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
