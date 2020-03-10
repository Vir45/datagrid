import { createStore } from 'redux';
import rootReducer from './Reducers/reducer';

let store = createStore(rootReducer);

export default store;
