import {createSlice} from "@reduxjs/toolkit";
import {BasketInterface} from "../interfaces/Basket";

const initialState: BasketInterface = {
   products: [],
   totalPrice: 0,
   isVisible: false
}

const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      getTotalPrice(state) {
         state.totalPrice = state.products.reduce((acc, product) => {
            return acc + (product.price * product.quantity)
         }, 0)
      },
      toggleVisibility(state) {
         state.isVisible = !state.isVisible
      },
      addToBasket(state, action) {
         const item = state.products.find(item => item.id === action.payload.id)

         if(item){
            const newItem = {...item}
            newItem.quantity = newItem.quantity + action.payload.quantity
            state.products[state.products.indexOf(item)] = newItem
         }else{
            state.products = [...state.products, action.payload]
         }
      },
      removeFromBasket(state, action) {
         state.products = state.products.filter(item => item.id != action.payload)
      }
   }
})

export default basketSlice
export const basketActions = basketSlice.actions
