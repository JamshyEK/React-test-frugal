import { call, put,takeEvery } from 'redux-saga/effects'
import {
    ADD_CATS,
    CATS_ERROR,
    CATS_LOADING
  } from './actionType'
import {fetchCats} from '../../api/index'
import {addCats,ErrorCats} from './action' 

export function* fetchData(action) {
   try {
      const data = yield call(fetchCats)
   
     // yield put({type: ADD_DOGS , data})
      yield put(addCats(data))

   } catch (error) {
      //yield put({type: DOGS_ERROR, error})
      yield put(ErrorCats(error))
   }
}

export function* watchCatData() {
  yield takeEvery(CATS_LOADING, fetchData)
}


