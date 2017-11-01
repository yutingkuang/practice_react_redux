/* @flow */
import React, { PureComponent } from 'react';
import { Dispatch, Store } from '../../core/container/hoc';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';
/* constants */
import { STORE_KEY } from './constant';

/* actions */
import { fetchUsers, fetchPhotos } from './action';

/* component */
import MugShot from './MugShot';

/* helper */
import { ArrayEqual } from '~/helpers/equal';
import { compose } from 'ramda';

/* type */
import type { Props, User } from './type';

@applyStyles(style)
export class View extends PureComponent<void, Props, void> {
  componentWillMount() {
    /* 渲染前就撈成員資料 */
    this.props.dispatch([fetchUsers(), fetchPhotos()]);
  }

  render() {
    const users = this.props.storeData;
    return (
      <div styleName="container">
        <div styleName="page-header">
          <h1 styleName="text-center">Users</h1>
        </div>
        <div styleName="user-list">
          {users.map(user => (
            <MugShot key={`user-photo-${user.id}`} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default compose(Dispatch, Store(STORE_KEY))(View);
