import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducer/app-reducer';
import { clientsReducer } from './reducer/clients-reducer';
import { searchReducer } from './reducer/search-reducer';

const rootReducer = combineReducers({
  address: searchReducer,
  clients: clientsReducer,
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
