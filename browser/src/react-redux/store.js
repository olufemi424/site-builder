import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ReduxThunk,
            createLogger({collapsed: true})
        )
    )
);