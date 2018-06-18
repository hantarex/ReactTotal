import React, {Component} from 'react';
import configureStore from './Service/Reducers/configureStore';
import {Provider} from 'react-redux';
import Totalizator from './Service/Components/Totalizator';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import {createHashHistory} from 'history';
import Header from './Service/Components/Header';
import ReactLoading from 'react-loading';
import StyleLoading from "./Service/Styles/StyleLoading";
import {css} from 'aphrodite';
import Body from "./Service/Components/BodyComponent";

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState())
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        let el = document.getElementById("Loading")
        this.setState({loading: false})
    }
    render() {
        let loadingClass=[css(StyleLoading.loading)]

        if(!this.state.loading) {
            loadingClass.push(css(StyleLoading.disable));
        }

        return (
            <Provider store={store}>
                <HashRouter history={createHashHistory}>
                    <Body />
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
