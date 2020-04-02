import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';
import NavigatorService from '~/services/navigator';


export default function App({ popup }) {
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);

  return (
    <Routes
      ref={navigatorRef => {
        NavigatorService.setContainer(navigatorRef);
      }}
    />
  );
}
