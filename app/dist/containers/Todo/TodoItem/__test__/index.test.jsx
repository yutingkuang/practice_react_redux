import React from 'react';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy, stub } from 'sinon';
import { View } from '../index';

describe('TodoItem View', () => {
  let instance: any, wrapper: any;
  let completeStub;
  const removeSpy = spy(),
    updateSpy = spy();
  const mockProps = {
    todo: { title: 'mock Title' },
    removeHandler: removeSpy,
    updateHandler: updateSpy
  };

  describe('modify: false , ', () => {
    before(() => {
      wrapper = shallow(<View {...mockProps} />);
      instance = wrapper.instance();
    });

    after(() => {
      completeStub.restore();
      removeSpy.reset();
      updateSpy.reset();
      instance = wrapper = null;
    });

    it('瀏覽模式：', () => {
      const { title } = mockProps.todo;

      assert(expect(wrapper.state('modify')).to.equal(false), '初始值應為false');

      assert.isTrue(
        wrapper
          .find('li')
          .containsAllMatchingElements([
            <input />,
            <span>{title}</span>,
            <button>X</button>
          ]),
        '應顯示瀏覽模式'
      );
    });

    it('模擬checkbox checked：', () => {
      completeStub = stub(instance, 'completeHandler');
      wrapper.find('input[type="checkbox"]').simulate('change');
      instance.forceUpdate();
      assert.isTrue(completeStub.calledOnce, '應被呼叫一次');
      assert.isTrue(completeStub.calledWith(mockProps.todo), '應該帶todo參數');
    });

    it('模擬 [Remove] Button Click：', () => {
      wrapper.find('button').simulate('click');
      assert.isTrue(removeSpy.calledOnce);
    });

    it('模擬 span click：', () => {
      wrapper.find('span').simulate('click');
      assert.isTrue(wrapper.state('modify'), '點擊後modify應為true');
    });
  });

  describe('modify: true , ', () => {
    before(() => {
      wrapper = mount(<View {...mockProps} />);
      instance = wrapper.instance();
    });

    after(() => {
      completeStub.restore();
      removeSpy.reset();
      updateSpy.reset();
      instance = wrapper = null;
    });

    it('編輯模式：', () => {
      instance.setState({ modify: true });

      assert.isTrue(
        wrapper.find('li').containsAllMatchingElements([<input />]),
        '應顯示輸入框'
      );
    });

    it('模擬輸入：', () => {
      const input = wrapper.find('input');

      input.simulate('keyPress', { charCode: 40 });
      assert.isFalse(updateSpy.calledOnce, '尚未執行');

      input.simulate('keyPress', { charCode: 13 });
      assert.isTrue(updateSpy.calledOnce, '應執行');
    });

    it('模擬失焦：', () => {
      wrapper.find('input').simulate('blur');
      assert.isFalse(wrapper.state('modify'), '失焦後應為false');
    });
  });
});
