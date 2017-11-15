/* @flow */
import React, { PureComponent } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';
import { Link } from 'react-router-dom';

/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchAlbumsByUser, fetchUserById } from './action';

/* helper */
import { ArrayEqual } from '~/helpers/equal';
import { compose } from 'ramda';

/* type */
import type { Props, Album } from './type';

@applyStyles(style)
export class View extends PureComponent<void, Props, void> {
  componentWillMount() {
    /* 渲染前就撈成員資料 */
    const { match } = this.props;
    const userId = parseInt(match.params.userId);
    this.props.dispatch([fetchAlbumsByUser(userId), fetchUserById(userId)]);
  }

  render() {
    // console.log('album', this.props.storeData);
    const { albums, user: { name } } = this.props.storeData;
    return (
      <div styleName="container">
        <h5 styleName="pull-left">
          <a href="/user">go back</a>
        </h5>
        <div styleName="page-header">
          <h1 styleName="text-center album-page-title">{`${name}'s Albums`}</h1>
        </div>
        <div styleName="children-list">
          {albums.map(({ title, id, userId }) => (
            <div key={`album-${userId}-${id}`} styleName="album">
              <Link to={`/album/${userId}/${id}`}>
                <span styleName="icon glyphicon glyphicon-folder-close icon" />
                <span styleName="album-title">
                  {title.length < 25 ? title : `${title.slice(0, 25)}...`}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
