import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    attempts: () => {return 9},
    errorBlock: () => {return {
        active: 0,
        text: "default"
    }},
    page: ""
};

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
}