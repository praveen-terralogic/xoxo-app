import { createStore } from "redux";
import initialState from "./initialState.json";

const voucherReducer = (state = { ...initialState }, action) => {
  if (action.type === "addNewVoucher") {
    return {
      voucherList: [...state.voucherList, action.value],
    };
  }
  return state;
};

const store = createStore(voucherReducer);

export default store;
