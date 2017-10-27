/* @flow */
import React, { Component } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';

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

@applyStyles(style)
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

  setPage = (n: number) => () => {
    const { pagination: { perItem, pages }, posts } = this.state;

    this.setState({
      pagination: {
        perItem,
        pages,
        nowPage: n,
        nowList: posts.slice((n - 1) * perItem, n * perItem)
      }
    });
  };

  prevPage = () => {
    const { pagination } = this.state;
    pagination.nowPage > 1 ? this.setPage(pagination.nowPage - 1)() : null;
  };

  nextPage = () => {
    const { pagination } = this.state;
    pagination.nowPage < pagination.pages.length
      ? this.setPage(pagination.nowPage + 1)()
      : null;
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
    const { pagination: { pages, nowPage, nowList, perItem } } = this.state;
    // console.log('nowPage',nowPage);
    return (
      <div styleName="container">
        <div styleName="page-header">
          <h1 styleName="text-center">Post</h1>
          <div>
            {nowList.map((post, i) => (
              <PostComp
                key={`post-item-${post.id}`}
                post={post}
                index={(nowPage - 1) * perItem + i + 1}
              />
            ))}
          </div>
          <div>
            <nav aria-label="Page navigation">
              <ul styleName="pagination paging">
                <li styleName={nowPage === 1 ? 'hidden' : ''}>
                  <a aria-label="First" onClick={this.setPage(1)}>
                    <i styleName="fa fa-angle-double-left" aria-hidden="true" />
                  </a>
                </li>
                <li styleName={nowPage === 1 ? 'hidden' : ''}>
                  <a aria-label="Previous" onClick={this.prevPage}>
                    <i styleName="fa fa-angle-left" aria-hidden="true" />
                  </a>
                </li>
                {pages.map(p => (
                  <li key={`pages-${p}`}>
                    <a
                      styleName={nowPage === p + 1 ? 'active' : ''}
                      onClick={this.setPage(p + 1)}>
                      {p + 1}
                    </a>
                  </li>
                ))}
                <li styleName={nowPage === pages.length ? 'hidden' : ''}>
                  <a aria-label="Next" onClick={this.nextPage}>
                    <i styleName="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </li>
                <li styleName={nowPage === pages.length ? 'hidden' : ''}>
                  <a aria-label="Last" onClick={this.setPage(pages.length)}>
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
