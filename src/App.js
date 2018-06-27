import React, {Component} from 'react';
import configureStore from './Service/Reducers/configureStore';
import {Provider} from 'react-redux';
import StyleLoading from "./Service/Styles/StyleLoading";
import {css} from 'aphrodite';
import Body from "./Service/Components/BodyComponent";

const store = configureStore();

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
                    <Body />
            </Provider>
        );
    }
}

export default App;
