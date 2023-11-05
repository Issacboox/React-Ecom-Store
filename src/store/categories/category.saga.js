// /* eslint-disable no-unused-vars */
// import { takeLatest, all, call, put } from "redux-saga/effects";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import {
//   fetchCategoriesSuccess,
//   fetchCategoriesFailure,
// } from "./category.action";
// import { CATEGORIES_ACTION_TYPES } from "./category.types";

// // export const fetchCategoriesStartAsync = () => {
// //     return async (dispatch) => {
// //       dispatch(fetchCategoriesStart());

// //   };

// // use yield instead of await this mean the same that im gonna wait until i get something
// // where i have function and wanna turn it's to Effects use call
// export function* fetchCategoriesAsync() {
//   try {
//     const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
//     // then use put instead of dispatch only in Redux Saga
//     yield put(fetchCategoriesSuccess(categoriesArray));
//     // dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     yield put(fetchCategoriesFailure(error));
//   }
// }
// //Saga is funtion that action to what happen and do something wth what happend
// // this s reponding to categories
// export function* onFetchCategories() {
//   //this need 2 argument first action type that i need repsponse, next is what i want it to happend
//   yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
// }

// export function* categoriesSaga() {
//   //this all call effect said hey run all inside when all of this is done
//   yield all([call(onFetchCategories)]); //give array what ever  i want
// }

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}