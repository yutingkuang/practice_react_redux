import View from './View';
import Reducer from './Reducer';
import Constant from './Constant';

export default {
  reducers: {
    [Constant.StoreKey]: Reducer
  },
  router: {
    path: 'btnClick',
    component: View
  }
};
