import {createStore} from 'redux';
import combineReducers from './reducer';

let initState={
    num:0
}

let store = createStore(combineReducers,initState)

export default store;