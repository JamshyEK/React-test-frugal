import { call, put,takeEvery } from 'redux-saga/effects'
import {
    ADD_DOGS,
    DOGS_ERROR,
    DOGS_LOADING
  } from './actionType'
import {fetchDogs} from '../../api/index'
import {addDogs,ErrorDogs} from './action' 

export function* fetchData(action) {
   try {
      const data = yield call(fetchDogs)
      console.log("------",data,"-----")
     // yield put({type: ADD_DOGS , data})
      yield put(addDogs(data))

   } catch (error) {
      //yield put({type: DOGS_ERROR, error})
      yield put(ErrorDogs(error))
   }
}

export function* watchDogData() {
  yield takeEvery(DOGS_LOADING, fetchData)
}

















