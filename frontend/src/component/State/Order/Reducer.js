import { GET_ALL_EVENTS_SUCCESS } from "../Restaurant/ActionType";
import {
  CREATE_ORDER_REQUEST,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
} from "./ActionType";

const initialState = {
  loading: false,
  orders: [],
  error: null,
  notifications: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_ORDERS_REQUEST:
    case CREATE_ORDER_REQUEST:
      return { ...state, error: null, loading: true };
    case GET_ALL_EVENTS_SUCCESS:
      return { ...state, error: null, loading: false, orders: action.payload };
    case GET_USERS_ORDERS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
