import { call, put,takeEvery } from 'redux-saga/effects'
import {
  
    USERS_LOADING
  } from './actionType'
import {getUsers,ErrorUsers} from './action' 

export function* fetchData(action) {
   try {
      //const data = yield call(fetchDogs)
      yield put(getUsers())
     // console.log("------",data,"-----")
     // yield put({type: ADD_DOGS , data})
     // yield put(addUsers(data))

   } catch (error) {
      //yield put({type: DOGS_ERROR, error})
      yield put(ErrorUsers(error))
   }
}

export function* watchUserData() {
  yield takeEvery(USERS_LOADING, fetchData)
}



