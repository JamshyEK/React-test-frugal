import { call, all } from 'redux-saga/effects'
import { locationActionWatcher } from '../containers/LocationContainer/saga'
import { storeActionWatcher } from '../containers/StoreContainer/saga'

function* rootSaga() {
    yield all([

        call(locationActionWatcher),
        call(storeActionWatcher)
    ])
}

export default rootSaga