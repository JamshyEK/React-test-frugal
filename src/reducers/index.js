import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import {connectRouter} from 'connected-react-router'
import storage from 'redux-persist/es/storage'


import store, {history} from '../boot/configureStore'

const createRootReducer = history=>
combineReducers({
    router:connectRouter(history),
})

export default createRootReducer