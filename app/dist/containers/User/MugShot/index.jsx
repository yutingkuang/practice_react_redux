/* @flow */
import React from 'react';
import { applyStylesInline } from '../../../core/css-module';
import style from '../assets/stylesheets/style.scss';

export const MugShot: any = (props: any) => {
  const { user: { id, name, photo } } = props;
  return (
    <div styleName="mugshot">
      <a href={`/album/${id}`}>
        <img src={photo} styleName="img-rounded" alt={name} />
        <span>{name}</span>
      </a>
    </div>
  );
};
export default applyStylesInline(style)(MugShot);
