import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import {connectRouter} from 'connected-react-router'
import storage from 'redux-persist/es/storage'
import DogReducer from '../containers/DogContainer/reducer'
import CatReducer from '../containers/CatContainer/reducer'
import UserReducer from '../containers/UsersContainer/reducer'
import {createForms} from 'react-redux-form';
import {initialUser} from '../screens/Users/userForm'



import store, {history} from '../boot/configureStore'

const createRootReducer = history=>
combineReducers({
    router:connectRouter(history),
    dogs:DogReducer,
    cats:CatReducer,
    users:UserReducer,
    ...createForms({
        usersForm: initialUser
    })
   
})

export default createRootReducer