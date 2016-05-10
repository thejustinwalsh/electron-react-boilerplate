import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import App from './app';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const rootElement = document.getElementById('root');

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app');

    render(
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>,
      rootElement
    );
  });
}
