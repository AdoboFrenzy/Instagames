import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';

const middleware = [thunk];

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(...middleware))
)

export default configureStore;