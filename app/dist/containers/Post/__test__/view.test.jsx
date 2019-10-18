import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { stub, spy } from 'sinon';
import { View } from '../view';
import * as Actions from '../Action';

describe('Post View', () => {
  let instance: any, wrapper: any, dispatchStub: any, fetchStub: any;

  const mockPosts = [
    {
      userId: 1,
      id: 1,
      title: 'fake title 1',
      body: 'fake body 1'
    },
    {
      userId: 1,
      id: 2,
      title: 'fake title 2',
      body: 'fake body 2'
    }
  ];

  const initState = {
    posts: [],
    pagination: {
      perItem: 10,
      nowPage: 1,
      pages: [],
      nowList: []
    },
    perItemList: [5, 10, 25, 50]
  };

  let mockPostList = [];
  for (let i = 0; i < 25; i++) {
    mockPostList.push({
      userId: 1,
      id: i + 1,
      title: 'post title ' + (i + 1),
      body: 'post body ' + (i + 1)
    });
  }

  before(() => {
    fetchStub = stub(Actions, 'fetchPost');
    fetchStub.returns(mockPosts);
    dispatchStub = stub();

    wrapper = shallow(<View dispatch={dispatchStub} />);
    instance = wrapper.instance();
  });

  after(() => {
    instance = wrapper = null;
    dispatchStub.reset();
    fetchStub.reset();
    // pageStub.reset();
  });

  it('should return the initial state', () => {
    expect(wrapper.state()).to.deep.equal(initState);
  });

  it('模擬 setPerPage：', () => {
    let perpageStub = stub(instance, 'setPerPage');
    const { perItemList } = initState;
    let n = 0;
    wrapper
      .find('ul.perpage > li a')
      .at(n)
      .simulate('click');
    assert.isTrue(
      perpageStub.calledWithMatch(perItemList[n]),
      `點擊第${n + 1}個傳參數${perItemList[n]}`
    );
    n = 1;
    wrapper
      .find('ul.perpage > li a')
      .at(n)
      .simulate('click');
    assert.isTrue(
      perpageStub.calledWithMatch(perItemList[n]),
      `點擊第${n + 1}個傳參數${perItemList[n]}`
    );
  });

  let pageStub;
  it('模擬 setPage：', () => {
    pageStub = stub(instance, 'setPage');
    pageStub.returns(() => {});
    instance.setState({
      pagination: {
        perItem: 10,
        nowPage: 1,
        pages: [0, 1, 2],
        nowList: mockPostList
      }
    });

    wrapper
      .find('ul.paging > li a')
      .at(3)
      .simulate('click');
    assert.isTrue(pageStub.calledWithMatch(2), `點擊第2頁傳參數2`);

    wrapper
      .find('ul.paging > li a')
      .at(4)
      .simulate('click');
    assert.isTrue(pageStub.calledWithMatch(3), `點擊第3頁傳參數3`);
    pageStub.restore();
  });

  // it('模擬 prevPage', () => {
  //   wrapper.find('ul.paging > li a').at(1).simulate('click'); //prev page btn
  //   assert.isTrue(
  //     pageStub.calledWithMatch(2),
  //     `第3頁前一頁是2`
  //   );
  // });

  // it('模擬 nextPage', () => {
  //   wrapper.find('ul.paging > li a').at(5).simulate('click'); //next page btn
  //   assert.isTrue(
  //     pageStub.calledWithMatch(3),
  //     `第2頁下一頁是3`
  //   );
  // });

  describe('模擬 prevPage方法', () => {
    it('! nowPage > 1', () => {
      instance.prevPage();
      expect(wrapper.state('pagination').nowPage).to.equal(1);
    });

    it('nowPage > 1', () => {
      instance.setState({
        pagination: {
          perItem: 10,
          nowPage: 2,
          pages: [0, 1, 2],
          nowList: mockPostList
        }
      });

      instance.prevPage();
      expect(wrapper.state('pagination').nowPage).to.equal(1);
    });
  });

  describe('模擬 nextPage方法', () => {
    it('nowPage < pages.length', () => {
      instance.nextPage();
      expect(wrapper.state('pagination').nowPage).to.equal(2);
    });

    it('! nowPage < pages.length', () => {
      instance.setState({
        pagination: {
          perItem: 10,
          nowPage: 3,
          pages: [0, 1, 2],
          nowList: mockPostList
        }
      });

      instance.nextPage();
      expect(wrapper.state('pagination').nowPage).to.equal(3);
    });
  });
});
