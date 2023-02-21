import {createSlice} from "@reduxjs/toolkit";

const initialState: { isVisible: boolean } = {
   isVisible: false
}

const menuSlice = createSlice({
   name: "menu",
   initialState,
   reducers: {
      toggle(state) {
         state.isVisible = !state.isVisible
      }
   }
})

export default menuSlice
export const menuActions = menuSlice.actions