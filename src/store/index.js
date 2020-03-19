import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import persistReducers from './persistReducers';
import createStore from './creacteStore';

import rootReducer from './modulos/rootReducer';
import rootSaga from './modulos/rootSaga';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
