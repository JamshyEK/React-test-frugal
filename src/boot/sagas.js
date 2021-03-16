import { call, all } from 'redux-saga/effects'
import {watchDogData} from '../containers/DogContainer/saga'
import {watchCatData} from '../containers/CatContainer/saga'
import {watchUserData} from '../containers/UsersContainer/saga'


function* rootSaga() {
    yield all([
        console.log("sagatest"),
        call(watchDogData),
        call(watchCatData),
        call(watchUserData)
      
    ])
}

export default rootSaga