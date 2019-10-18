import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { View } from '../view';
import * as Actions from '../Action';

describe('Todo View', () => {
  let instance: any, wrapper: any, dispatchStub: any;

  describe('Fetch 之前 , ', () => {
    before(() => {
      wrapper = shallow(<View />);
      instance = wrapper.instance();
    });

    after(() => {
      instance = wrapper = null;
    });

    it('todos為空時：', () => {
      assert.isTrue(
        wrapper
          .find('.todo-list')
          .containsAllMatchingElements([
            <li> Empty ! (Please Fetch First)</li>
          ]),
        '應顯示為空提示'
      );

      expect(
        wrapper
          .find('.todo-list')
          .containsAllMatchingElements([<li> Empty ! (Please Fetch First)</li>])
      ).to.equal(true);
    });
  });

  describe('Fetch 之後 , ', () => {
    let fetchStub;
    before(() => {
      fetchStub = sinon.stub(Actions, 'fetchByAll');
      fetchStub.returns(1);
      dispatchStub = sinon.stub();
      wrapper = shallow(<View dispatch={dispatchStub} />);
      instance = wrapper.instance();
    });

    after(() => {
      instance = wrapper = null;
      fetchStub.restore();
      dispatchStub.reset();
    });

    it('模擬 [Fetch] Button Click：', () => {
      const btnFetch = wrapper.find('button');
      btnFetch.simulate('click');

      assert.isTrue(dispatchStub.calledOnce);
    });
  });
});
