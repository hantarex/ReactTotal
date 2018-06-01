import React, { Component } from 'react';
import configureStore from './Service/Reducers/configureStore';
import {Provider} from 'react-redux';
import Totalizator from './Service/Components/Totalizator';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState())
});

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
