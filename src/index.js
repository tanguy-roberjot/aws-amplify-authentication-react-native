import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import awsConfig from '../aws-exports';
import { store, persistor } from './store';

Amplify.configure(awsConfig);

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar hidden />
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}
