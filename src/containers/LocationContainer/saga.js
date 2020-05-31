
import { put, takeEvery } from 'redux-saga/effects'
import { createBrowserHistory } from 'history'
import { LOCATION_INIT_ACTION } from './action'
import { push } from 'connected-react-router'
import { appConfig } from '../../config'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

var btoa = require('Base64').btoa
var history = createBrowserHistory()


function* fetchlocation() {
    console.log("saga work")
    yield toast.success(' successfully', {
        autoClose: 3000
    })
}

export function* locationActionWatcher() {
    yield takeEvery(LOCATION_INIT_ACTION, fetchlocation)

}