import {createSlice} from "@reduxjs/toolkit";
import {BasketInterface, BasketItemInterface} from "../interfaces/Basket";

const products = localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')!) : []
const totalPrice = localStorage.getItem('totalPrice') ? JSON.parse(localStorage.getItem('totalPrice')!) : 0

const saveToLocalStorage = (products: BasketItemInterface[], totalPrice: number) => {
   localStorage.setItem('basketItems', JSON.stringify(products.map( item => item)))
   localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
}

const initialState: BasketInterface = {
   products,
   totalPrice,
   isVisible: false,
}

const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      toggleVisibility(state) {
         state.isVisible = !state.isVisible
      },
      addToBasket(state, action) {
         const item = state.products.find(item => item.id === action.payload.id)

         if (item) {
            const newItem = {...item}
            newItem.quantity = newItem.quantity + action.payload.quantity
            state.products[state.products.indexOf(item)] = newItem
         } else {
            state.products = [...state.products, action.payload]
         }

         state.totalPrice = state.products.reduce((acc, product): number => {
            return Number((acc + (product.price * product.quantity)).toFixed(2))
         }, 0)

         saveToLocalStorage(state.products, state.totalPrice)
      },
      removeFromBasket(state, action) {
         state.products = state.products.filter(item => item.id != action.payload)
         state.totalPrice = state.products.reduce((acc, product): number => {
            return Number((acc + (product.price * product.quantity)).toFixed(2))
         }, 0)

         saveToLocalStorage(state.products, state.totalPrice)
      },
      setQuantity(state, action) {
         const item = state.products.find(item => item.id === action.payload.id)

         if (item) {
            const newItem = {...item}
            newItem.quantity = action.payload.quantity
            state.products[state.products.indexOf(item)] = newItem
         }

         state.totalPrice = state.products.reduce((acc, product): number => {
            return Number((acc + (product.price * product.quantity)).toFixed(2))
         }, 0)

         saveToLocalStorage(state.products, state.totalPrice)
      },
      clearBasket(state) {
        state.products = []
        state.totalPrice = 0

         saveToLocalStorage(state.products, state.totalPrice)
      }
   }
})

export default basketSlice
export const basketActions = basketSlice.actions
