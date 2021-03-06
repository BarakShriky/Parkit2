import { createStore, applyMiddleware } from 'redux';
import reduxImmutableInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/parkitReducer';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableInvariant())
    );
}
