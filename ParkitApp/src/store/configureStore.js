import { createStore, applyMiddleware } from 'redux';
import reduxImmutableInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/loginReducer';
import initialState from '../reducers/initialState';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableInvariant())
    );
}
