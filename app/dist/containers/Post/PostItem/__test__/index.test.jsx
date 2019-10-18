import React from 'react';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy, stub } from 'sinon';
import { PostComp as View } from '../index';

describe('PostItem View', () => {
  let instance: any, wrapper: any;
  const mockProps = {
    post: { id: 1, title: 'title', userId: 1, body: 'body' },
    index: 1
  };

  before(() => {
    wrapper = shallow(<View {...mockProps} />);
    instance = wrapper.instance();
  });

  after(() => {
    instance = wrapper = null;
  });

  it('check .panel-body', () => {
    assert.isTrue(
      wrapper.find('.panel-body').containsMatchingElement(
        <div styleName="panel-body">
          #1 title<span styleName="pull-right">By 1</span>
        </div>
      )
    );
  });

  it('check .panel-footer', () => {
    assert.isTrue(
      wrapper.find('.panel-footer').containsMatchingElement(
        <div styleName="panel-footer">
          body<span styleName="pull-right">
            <a href="/post/1/comments">...detail</a>
          </span>
        </div>
      )
    );
  });
});
