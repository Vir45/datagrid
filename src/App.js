import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux';

import ConnectFilterlTable from './Container/ConnectedFilterList';
import PureTable from './Component/Table/PureTable';
import './App.css';

function App() {
	// console.log(store.getState())
  return (
		<Provider store={store}>
    <div className="App">
			<ConnectFilterlTable />
			<PureTable />
    </div>
		</Provider>
  );
}

export default App;


