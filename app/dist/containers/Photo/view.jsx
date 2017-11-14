/* @flow */
import React, { PureComponent } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';

/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchPhotosByAlbum, fetchUserById, fetchAlbumById } from './action';

/* component */
import Lightbox from 'react-images';

/* helper */
import { compose } from 'ramda';

/* type */
import type { Props, State, Photo } from './type';

@applyStyles(style)
export class View extends PureComponent<void, Props, State> {
  props: Props;
  state: State = {
    lightboxIsOpen: false,
    currentImage: 0
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

  onClickThumbnail = () => {
    console.log('onClickThumbnail');
  };

  render() {
    const { photos, user: { name }, album } = this.props.storeData;
    const { lightboxIsOpen, currentImage } = this.state;
    return (
      <div styleName="container-fluid">
        <div styleName="row">
          <div styleName="col-sm-3">
            <h4 styleName="page-title">{`${name}'s Albums`}</h4>
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

export default compose(Dispatch, Store(STORE_KEY))(View);
