/* eslint-disable no-unused-vars */
import { ORDER_ACTION_TYPES } from "./order.types";
import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { handleSaveOrder } from "./order.selector";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";

export function* saveOrder({ payload }) {
  try {
    // Get the current user using the getCurrentUser function
    const currentUser = yield select(getCurrentUser);
    const timestamp = new Date().toDateString();
    if (currentUser) {
      // Pass the user ID as orderUserID in the payload
      yield handleSaveOrder({
        ...payload,
        orderUserID: currentUser.uid,
        orderCreatedDate: timestamp,
      });
    } else {
      console.log("there is no user");
    }
  } catch (error) {
    console.log(error)
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ORDER_ACTION_TYPES.SAVE_ORDER_START, saveOrder);
}

export function* orderSaga() {
  yield all([call(onSaveOrderHistoryStart)]);
}
