import { call, all } from 'redux-saga/effects'
import { locationActionWatcher } from '../containers/LocationContainer/saga'
function* rootSaga() {
    yield all([

        call(locationActionWatcher),
    ])
}

export default rootSaga