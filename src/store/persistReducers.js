import { persistReducer } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      storage: FilesystemStorage,
      key: 'authexample',
      whitelist: ['auth'],
    },
    reducers
  );
  return persistedReducer;
};
