import { ORDER_ACTION_TYPES } from "./order.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const orderStart = (name, address, telephone) =>
  createAction(ORDER_ACTION_TYPES.ORDER_START, { name, address, telephone });

export const orderSuccess = ({ order, additionalDetails }) =>
  createAction(ORDER_ACTION_TYPES.ORDER_SUCCESS, { order, additionalDetails });

export const orderFailed = (error) =>
  createAction(ORDER_ACTION_TYPES.ORDER_FAILED, error);
