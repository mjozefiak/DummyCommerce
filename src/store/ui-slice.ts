import {createSlice} from "@reduxjs/toolkit";

const initialState: {menuState: boolean, basketState: boolean} = {
   menuState: false,
   basketState: false
}

const uiSlice = createSlice({
   name: "ui",
   initialState,
   reducers: {
      toggleMenuState(state) {
         state.menuState = !state.menuState
      },
      toggleBasketState(state) {
         state.basketState = !state.basketState
      }
   }
})

export default uiSlice
export const uiActions = uiSlice.actions
