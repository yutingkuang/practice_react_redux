/* @flow */
import View from './view';
import Reducer from './reducer';
import { STORE_KEY } from './constant';
import Saga from './saga';

export default {
  reducer: {
    [STORE_KEY]: Reducer
  },
  saga: Saga,
  router: {
    path: '/album/:userId',
    component: View
  }
};
