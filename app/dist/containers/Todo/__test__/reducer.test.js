import reducer from '../reducer';
import { TODO_GET, TODO_REMOVE, TODO_UPDATE, TODO_ADD } from '../constant';
import { expect } from 'chai';
import { append } from 'ramda';

describe('todos reducer', () => {
  const mockStore = [
    {
      title: 'fake title 1',
      completed: true,
      id: 1,
      userId: 1
    },
    {
      title: 'fake title 2',
      completed: false,
      id: 2,
      userId: 1
    }
  ];
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });

  it('should handle TODO_GET', () => {
    expect(
      reducer([], {
        type: TODO_GET,
        payload: mockStore
      })
    ).to.deep.equal(mockStore);
  });

  it('should handle TODO_REMOVE', () => {
    expect(
      reducer(mockStore, {
        type: TODO_REMOVE,
        payload: 1
      })
    ).to.deep.equal([
      {
        title: 'fake title 2',
        completed: false,
        id: 2,
        userId: 1
      }
    ]);
  });

  it('should handle TODO_UPDATE', () => {
    expect(
      reducer(mockStore, {
        type: TODO_UPDATE,
        payload: {
          title: 'edit title 1',
          completed: false,
          id: 1,
          userId: 1
        }
      })
    ).to.deep.equal([
      {
        title: 'edit title 1',
        completed: false,
        id: 1,
        userId: 1
      },
      {
        title: 'fake title 2',
        completed: false,
        id: 2,
        userId: 1
      }
    ]);
  });

  it('should handle TODO_ADD', () => {
    expect(
      reducer(mockStore, {
        type: TODO_ADD,
        payload: 'new todo'
      })
    ).to.deep.equal(
      append(
        {
          title: 'new todo',
          completed: false,
          id: mockStore[mockStore.length - 1].id + 1,
          userId: 1
        },
        mockStore
      )
    );
  });
});
