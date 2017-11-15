/* @flow */
import React, { Component } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';
import { Link } from 'react-router-dom';

/* constants */
import { STORE_KEY } from './constant';
import { STORE_KEY as Album_STORE_KEY } from '../Album/constant';
/* actions */
import { fetchPhotosByAlbum, fetchUserById, fetchAlbumById } from './action';

/* component */
import Lightbox from 'react-images';

/* helper */
import { compose } from 'ramda';
import { ObjectEqual } from '~/helpers/equal';

/* type */
import type { Props, State, Photo } from './type';

@applyStyles(style)
export class View extends Component<void, Props, State> {
  props: Props;
  state: State = {
    lightboxIsOpen: false,
    currentImage: 0
  };

  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false });
  };

  openLightbox = (index: number) => () => {
    this.setState({ lightboxIsOpen: true, currentImage: index });
  };

  gotoPrevLightboxImage = () => {
    this.setState({ currentImage: this.state.currentImage - 1 });
  };

  gotoNextLightboxImage = () => {
    this.setState({ currentImage: this.state.currentImage + 1 });
  };

  componentWillMount() {
    /* 渲染前就撈成員資料 */
    const { match } = this.props;
    const { userId, albumId } = match.params;

    this.props.dispatch([
      fetchPhotosByAlbum(+albumId),
      fetchUserById(+userId),
      fetchAlbumById(+albumId)
    ]);
  }

  componentWillReceiveProps({ match: { params: { albumId } } }: Props) {
    if (albumId !== this.props.match.params.albumId) {
      this.props.dispatch([
        fetchPhotosByAlbum(+albumId),
        fetchAlbumById(+albumId)
      ]);
    }
  }

  render() {
    const {
      [STORE_KEY]: { photos, user: { name }, album }
    } = this.props.storeData;
    const { [Album_STORE_KEY]: { albums } } = this.props.storeData;
    const { lightboxIsOpen, currentImage } = this.state;
    return (
      <div styleName="container-fluid">
        <div styleName="row">
          <div styleName="col-sm-3">
            <h4 styleName="page-title">{`${name}'s Albums`}</h4>
            <div styleName="row mb-15">
              <div styleName="col-xs-4 center">
                <span
                  styleName="glyphicon glyphicon-home icon"
                  aria-hidden="true"
                />
              </div>
              <div styleName="col-xs-4 center">
                <Link to={`/user`}>
                  <span
                    styleName="glyphicon glyphicon-user icon"
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <div styleName="col-xs-4 center">
                <Link to={`/album/${album.userId}`}>
                  <span
                    styleName="glyphicon glyphicon-folder-close icon"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
            <ul>
              {albums.length > 0
                ? albums.map(album => (
                    <li key={album.id}>
                      <Link to={`/album/${album.userId}/${album.id}`}>
                        #{album.id} {album.title}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <div styleName="col-sm-9 content">
            <h2>{`#${album.id} ${album.title}`}</h2>
            <Lightbox
              images={photos.map(({ title, url, thumbnailUrl }) => ({
                src: url,
                caption: title,
                thumbnail: thumbnailUrl
              }))}
              currentImage={currentImage}
              isOpen={lightboxIsOpen}
              onClickPrev={this.gotoPrevLightboxImage}
              onClickNext={this.gotoNextLightboxImage}
              onClose={this.closeLightbox}
            />
            <div styleName="children-list">
              {photos.map(({ albumId, id, title, url }, i) => (
                <div
                  key={`album-${albumId}-${id}`}
                  styleName="album"
                  onClick={this.openLightbox(i)}>
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

export default compose(Dispatch, Store([STORE_KEY, Album_STORE_KEY]))(View);
