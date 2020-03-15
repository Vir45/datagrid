import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './Reducers/reducer';
import {loadState, saveState} from '../localStorage';

import throttle from 'lodash.throttle';

const persistedState = loadState();

let store = createStore(rootReducer, persistedState, devToolsEnhancer());

store.subscribe(throttle(() => {
  saveState({
    dataTable: {
			students: [],
			sort: store.getState().dataTable.sort,
			searchTerm: store.getState().dataTable.searchTerm,
			searchinAllTable: store.getState().dataTable.searchinAllTable,
			selectTypes: store.getState().dataTable.selectTypes,
		}
  });
}, 1000));

export default store;


