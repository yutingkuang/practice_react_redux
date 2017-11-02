/* @flow */
import React, { PureComponent } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';
/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchAlbumsByUser } from './action';

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
    this.props.dispatch([fetchAlbumsByUser(userId)]);
  }

  render() {
    const albums = this.props.storeData;
    return (
      <div styleName="container">
        <div styleName="page-header">
          <h1 styleName="text-center">123</h1>
        </div>
        <div styleName="children-list">
          {albums.map((album, i) => (
            <div key={i} styleName="album">
              <span styleName="icon glyphicon glyphicon-folder-close icon" />
              <span styleName="album-title">
                {album.title.length < 25
                  ? album.title
                  : `${album.title.slice(0, 25)}...`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
