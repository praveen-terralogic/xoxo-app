import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const voucherReducer = (state = { ...persistedState }, action) => {
  if (action.type === "addNewVoucher") {
    return { ...state, voucherList: [...state.voucherList, action.value] };
  }
  return state;
};

// const store = createStore(
//   voucherReducer,
//   composeWithDevTools(applyMiddleware())
// );

// New Store

const store = createStore(
  voucherReducer,
  persistedState,
  composeWithDevTools(applyMiddleware())
);
store.subscribe(() => {
  saveState({
    voucherList: store.getState().voucherList,
    countryList: store.getState().countryList,
    voucherCountryList: store.getState().voucherCountryList,
  });
});

export default store;
