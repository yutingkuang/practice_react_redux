/* @flow */
import React, { Component } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';

/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchPost } from './action';

/* component */
import PostComp from './PostItem';

/* helper */
import { ObjectEqual } from '~/helpers/equal';
import { compose } from 'ramda';

/* type */
import type { Props, State, Post } from './type';

@applyStyles()
export class View extends Component<void, Props, State> {
  props: Props;
  state: State = {
    posts: [],
    pagination: {
      perItem: 10,
      nowPage: 1,
      pages: [],
      nowList: []
    }
  };

  prevPage = () => {
    console.log('prevPage');
  };

  nextPage = () => {
    console.log('nextPage');
  };

  getLastPage = (length: number, perItem: number): number => {
    return length % perItem == 0 ? length / perItem : length / perItem + 1;
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
    this.props.dispatch(fetchPost());
  }

  render() {
    const { posts, pagination: { pages, nowPage, nowList } } = this.state;

    return (
      <div styleName="container">
        <div styleName="page-header">
          <h1 styleName="text-center">Post</h1>
          <div>
            {nowList.map((post, i) => (
              <PostComp
                key={`post-item-${post.id}`}
                post={post}
                index={i + 1}
              />
            ))}
          </div>
          <div>
            <nav aria-label="Page navigation">
              <ul styleName="pagination">
                <li>
                  <a href="#" aria-label="First">
                    <i styleName="fa fa-angle-double-left" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Previous" onClick={this.prevPage}>
                    <i styleName="fa fa-angle-left" aria-hidden="true" />
                  </a>
                </li>
                {pages.map(p => (
                  <li key={`pages-${p}`}>
                    <a href="#">{p + 1}</a>
                  </li>
                ))}

                <li>
                  <a href="#" aria-label="Next" onClick={this.nextPage}>
                    <i styleName="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Last">
                    <i
                      styleName="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
