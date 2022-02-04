import { applyMiddleware, createStore } from "redux";
import initialState from "./initialState.json";
import { composeWithDevTools } from "redux-devtools-extension";

const voucherReducer = (state = { ...initialState }, action) => {
  if (action.type === "addNewVoucher") {
    return { ...state, voucherList: [...state.voucherList, action.value] };
  }
  return state;
};

const store = createStore(
  voucherReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
