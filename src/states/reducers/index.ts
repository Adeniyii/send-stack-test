import { combineReducers } from "redux";
import deliveryLocationsReducer from "./deliveryLocations.reducer";

const reducers = combineReducers({
  deliveryLocations: deliveryLocationsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
