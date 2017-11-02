/* @flow */
import React, { PureComponent } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';

/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchPhotosByAlbum, fetchUserById, fetchAlbumById } from './action';

/* helper */
import { ArrayEqual } from '~/helpers/equal';
import { compose } from 'ramda';

/* type */
import type { Props, Photo } from './type';

@applyStyles(style)
export class View extends PureComponent<void, Props, void> {
  componentWillMount() {
    /* 渲染前就撈成員資料 */
    const { match } = this.props;
    const { userId, albumId } = match.params;

    this.props.dispatch([
      fetchPhotosByAlbum(parseInt(albumId)),
      fetchUserById(parseInt(userId)),
      fetchAlbumById(parseInt(albumId))
    ]);
  }

  render() {
    const { photos, user: { name }, album } = this.props.storeData;
    return (
      <div styleName="container-fluid">
        <div styleName="row">
          <div styleName="col-sm-3">
            <h4>{`${name}'s Albums`}</h4>
            {
              // <ul styleName="nav nav-pills nav-stacked">
              //   <li styleName="active"><a href="#section1">Home</a></li>
              //   <li><a href="#section2">Friends</a></li>
              //   <li><a href="#section3">Family</a></li>
              //   <li><a href="#section3">Photos</a></li>
              // </ul>
            }
          </div>
          <div styleName="col-sm-9 content">
            <h2>{`#${album.id} ${album.title}`}</h2>
            <div styleName="children-list">
              {photos.map(({ albumId, id, title, url }) => (
                <div key={`album-${albumId}-${id}`} styleName="album">
                  <img src={url} width="200" alt={title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
