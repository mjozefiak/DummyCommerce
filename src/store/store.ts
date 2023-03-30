import {configureStore} from "@reduxjs/toolkit";
import menuSlice from "./menu-slice";
import basketSlice from "./basket-slice";

const store = configureStore({
   reducer: {
      menu: menuSlice.reducer,
      basket: basketSlice.reducer
   }
})

export default store
export type RootState = ReturnType<typeof store.getState>
