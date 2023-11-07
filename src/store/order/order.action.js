import { ORDER_ACTION_TYPES } from "./order.types";
// import { createAction } from "../../utils/reducer/reducer.utils";

// export const orderStart = (name, address, telephone) =>
//   createAction(ORDER_ACTION_TYPES.ORDER_START, { name, address, telephone });

// export const orderSuccess = ({ order, additionalDetails }) =>
//   createAction(ORDER_ACTION_TYPES.ORDER_SUCCESS, { order, additionalDetails });

// export const orderFailed = (error) =>
//   createAction(ORDER_ACTION_TYPES.ORDER_FAILED, error);

export const saveOrderHistory = order => ({
  type: ORDER_ACTION_TYPES.SAVE_ORDER_START,
  paylaod: order
});

export const getUserOrderHistory = uid => ({
  type: ORDER_ACTION_TYPES.GET_USER_ORDER_START,
  payload: uid
})

export const setOrderHistory = history => ({
  type: ORDER_ACTION_TYPES.SET_USER_HISTORY_ORDER,
  payload:history
})