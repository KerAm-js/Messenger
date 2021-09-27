import dialogsReducer from './dialogs-reducer';
import { combineReducers, createStore }  from 'redux';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;