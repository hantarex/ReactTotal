import React, {Component} from 'react';
import configureStore from './Service/Reducers/configureStore';
import {Provider} from 'react-redux';
import Totalizator from './Service/Components/Totalizator';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import {createHashHistory} from 'history';
import Test from './Service/Components/Test';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState())
});

console.log(store.getState());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter history={createHashHistory}>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/test">Test</Link></li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Totalizator}/>
                            <Route path="/test" component={Test}/>
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
