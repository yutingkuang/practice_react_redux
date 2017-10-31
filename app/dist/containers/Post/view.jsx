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
import { compose, times, identity } from 'ramda';

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
    },
    perItemList: [5, 10, 25, 50]
  };

  setPerPage = (perItem: number) => () => {
    this.setState(({ posts }) => ({
      pagination: {
        perItem,
        pages: times(
          identity,
          posts.length % perItem === 0
            ? posts.length / perItem
            : parseInt(posts.length / perItem + 1)
        ),
        nowPage: 1,
        nowList: posts.slice(0, perItem)
      }
    }));
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
    const { pagination: { nowPage, pages } } = this.state;
    nowPage < pages.length ? this.setPage(nowPage + 1)() : null;
  };

  componentWillReceiveProps({ storeData }: Props) {
    const { pagination: { perItem } } = this.state;
    this.setState(storeData, this.setPerPage(perItem));
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
    const {
      pagination: { pages, nowPage, nowList, perItem },
      perItemList
    } = this.state;

    return (
      <div styleName="container">
        <div styleName="page-header">
          <div styleName="pull-right">
            <nav aria-label="Page navigation">
              <ul styleName="pagination paging perpage">
                {perItemList.map(n => (
                  <li key={`${n}-per-page`}>
                    <a
                      styleName={perItem === n ? 'active' : ''}
                      onClick={this.setPerPage(n)}>
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
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
          <div styleName="center">
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
