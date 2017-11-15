/* @flow */
import React from 'react';
/* redux */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
/* 多國語系 */
import I18n from 'redux-i18n';
import Locales from './locales';

/* router */
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

/* 系統設定 */
import { RootReducer, RootRoutes } from './roots';
import { promiseMiddleware, multiDispatchMiddleware } from './middleware';

/* saga */
import createSagaMiddleware from 'redux-saga';
import sagaFlow from './helpers/saga-flow';

/* saga */
const sagaMiddleware = createSagaMiddleware();

/**
 * Router setting
 */
const history = createHistory();
const routeMiddleware = routerMiddleware(history);
let store = {};
let DevTools = null;
if (process.env.NODE_ENV === 'development') {
  DevTools = require('./libraries/devTools');
  store = createStore(
    RootReducer,
    compose(
      applyMiddleware(
        routeMiddleware,
        multiDispatchMiddleware,
        promiseMiddleware,
        sagaMiddleware
      ),
      DevTools.instrument()
    )
  );
} else {
  store = createStore(
    RootReducer,
    applyMiddleware(
      routeMiddleware,
      multiDispatchMiddleware,
      promiseMiddleware,
      sagaMiddleware
    )
  );
}
/* 執行 saga 監聽 */
sagaMiddleware.run(sagaFlow);

/**
 * I18n opts
 * translations [語系檔]
 * initialLang  [預設語系]
 * fallbackLang [未翻譯文字語言]
 */
const RouterFormat = (
  <Provider store={store}>
    <div>
      <I18n translations={Locales} initialLang="zh_tw" fallbackLang="en">
        <ConnectedRouter history={history}>
          <Switch>
            {RootRoutes.map(({ path, component }) => (
              <Route path={path} key={path} component={component} />
            ))}
            <Redirect path="*" to="/" />
          </Switch>
        </ConnectedRouter>
      </I18n>
      {DevTools ? <DevTools /> : null}
    </div>
  </Provider>
);

export default RouterFormat;
