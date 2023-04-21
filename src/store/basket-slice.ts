import {createSlice} from "@reduxjs/toolkit";
import {BasketInterface, BasketItemInterface, DeliveryInterface} from "../interfaces/Basket";

const products = localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')!) : []
const totalPrice = localStorage.getItem('totalPrice') ? JSON.parse(localStorage.getItem('totalPrice')!) : 0
const delivery = localStorage.getItem('delivery') ? JSON.parse(localStorage.getItem('delivery')!) : {
   method: "FedEx",
   price: 8
}
const subtotalPrice = localStorage.getItem('subtotalPrice') ? JSON.parse(localStorage.getItem('subtotalPrice')!) : 0
const voucher = localStorage.getItem('voucher') && JSON.parse(localStorage.getItem('voucher')!)

const saveToLocalStorage = (products: BasketItemInterface[], delivery: DeliveryInterface, totalPrice: number, subtotalPrice: number, voucher?: number) => {
   localStorage.setItem('basketItems', JSON.stringify(products.map(item => item)))
   localStorage.setItem('delivery', JSON.stringify(delivery))
   localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
   localStorage.setItem('subtotalPrice', JSON.stringify(subtotalPrice))
   localStorage.setItem('voucher', JSON.stringify(voucher))
}

const initialState: BasketInterface = {
   products,
   delivery,
   subtotalPrice,
   totalPrice,
   voucher,
}

const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      calcPrice(state) {
         state.subtotalPrice = state.products.reduce((acc, product): number => {
            return Number((acc + (product.price * product.quantity)).toFixed(2))
         }, 0)

         state.totalPrice = state.voucher ? (state.subtotalPrice + state.delivery.price) * (1 - state.voucher / 100) : state.subtotalPrice + state.delivery.price
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

         basketSlice.caseReducers.calcPrice(state)
         saveToLocalStorage(state.products, state.delivery, state.totalPrice, state.subtotalPrice, state.voucher)
      },
      removeFromBasket(state, action) {
         state.products = state.products.filter(item => item.id != action.payload)

         this.calcPrice(state)
         saveToLocalStorage(state.products, state.delivery, state.totalPrice, state.subtotalPrice)
      },
      setQuantity(state, action) {
         const item = state.products.find(item => item.id === action.payload.id)

         if (item) {
            const newItem = {...item}
            newItem.quantity = action.payload.quantity
            state.products[state.products.indexOf(item)] = newItem
         }

         basketSlice.caseReducers.calcPrice(state)
         saveToLocalStorage(state.products, state.delivery, state.totalPrice, state.subtotalPrice)
      },
      clearBasket(state) {
         state.products = []
         state.totalPrice = 0

         saveToLocalStorage(state.products, state.delivery, state.totalPrice, state.subtotalPrice)
      },
      setVoucher(state, action) {
         switch (action.payload) {
            case "VOUCHER-15" : {
               state.voucher = 15
               break
            }
            case "SUPERVOUCHER" : {
               state.voucher = 50
               break
            }
            case "IKSDE" : {
               state.voucher = 1
               break
            }
            default : {
               state.voucher = 0
               break
            }
         }

         basketSlice.caseReducers.calcPrice(state)
         saveToLocalStorage(state.products, state.delivery, state.totalPrice, state.subtotalPrice, state.voucher)
      }
   }
})

export default basketSlice
export const basketActions = basketSlice.actions
