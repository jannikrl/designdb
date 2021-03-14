import { combineReducers } from "redux";
import auth from "./auth/reducer";
import design from "./design/reducer";
import designs from "./designs/reducer";
import designTypes from "./designTypes/reducer";
import designer from "./designer/reducer";
import designers from "./designers/reducer";
import manufacturer from "./manufacturer/reducer";
import manufacturers from "./manufacturers/reducer";
import homeGrid from "./homeGrid/reducer";

const reducers = {
  auth,
  design,
  designs,
  designTypes,
  designer,
  designers,
  manufacturer,
  manufacturers,
  homeGrid,
};

export const rootReducer = combineReducers(reducers);
