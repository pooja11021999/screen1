import { combineReducers } from "redux";

import { addressDataReducer } from "./reducers/addressDataReducer";
import { companyReducer } from "./reducers/companyDataReducer";


export const rootReducer = combineReducers({
  companiesData: companyReducer,
  addressData: addressDataReducer,
});
