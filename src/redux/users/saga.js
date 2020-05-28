import { put, takeEvery } from 'redux-saga/effects'


function* fetchUser() {

}

export function* aboutActionWatcher() {

    yield takeEvery(FETCH_USER_INIT_ACTION, fetchUser)
}
