/* eslint-disable no-unused-vars */
import { all, call } from 'redux-saga/effects';
import { userSaga } from './user/user.saga';
import { categoriesSaga } from './categories/category.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}