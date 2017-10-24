import View from './view';
import { STORE_KEY } from './constant';
import Reducer from './reducer';
import Saga from './saga';

export default {
  router: {
    path: '/',
    component: View
  },
  reducer: {
    [STORE_KEY]: Reducer
  },
  saga: Saga
};
