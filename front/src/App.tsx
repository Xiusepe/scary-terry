import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/normalize.css/normalize.css';

import AppRouter from './common/router/AppRouter';

import { store } from './core/store/Store';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
