import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';
// import logger from 'redux-logger';

const preloadedState = {}
const middleware = [thunk];

const configureStore = (
    createStore(
        rootReducer, 
        preloadedState,
        compose(
            applyMiddleware(...middleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
    )
        
)

export default configureStore;