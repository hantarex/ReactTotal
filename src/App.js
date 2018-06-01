import React, { Component } from 'react';
import {createStore} from 'redux';
import AllReducers from './Service/Reducers';
import {Provider} from 'react-redux';
import Totalizator from './Service/Components/Totalizator';

const store = createStore(AllReducers);

console.log(store.getState());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Totalizator/>
        </Provider>
    );
  }
}

export default App;
