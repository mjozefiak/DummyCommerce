import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import basketSlice from "./basket-slice";

const store = configureStore({
   reducer: {
      ui: uiSlice.reducer,
      basket: basketSlice.reducer
   }
})

export default store
export type RootState = ReturnType<typeof store.getState>
