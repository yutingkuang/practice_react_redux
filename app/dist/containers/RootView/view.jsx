import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { applyStyles } from '../../core/css-module';
import style from './assets/stylesheets/style.scss';

@applyStyles(style)
export default class Root extends PureComponent {
  render() {
    const { children } = this.props;
    return <div styleName="container">{children}</div>;
  }
}
