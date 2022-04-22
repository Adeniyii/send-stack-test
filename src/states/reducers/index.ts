import { combineReducers } from "redux";
import deliveryLocationsReducer from "./deliveryLocations.reducer";
import deliveryPriceReducer from "./deliveryPrice.reducer";

const reducers = combineReducers({
  deliveryLocations: deliveryLocationsReducer,
  deliveryPrice: deliveryPriceReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
