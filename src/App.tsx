import React from 'react';
import Router from './Router/router';
import { Provider } from 'react-redux';
import { store } from './Contexts/reducers/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router/>
      </Provider>
    </>
  );
}

export default App;
