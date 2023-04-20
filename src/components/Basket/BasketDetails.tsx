import {useState} from "react";
import {AiFillCloseCircle, BsFillCheckCircleFill} from "react-icons/all";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const BasketDetails = () => {
   const state = true
   const basketState = useSelector((state: RootState) => state.basket)

   return (
      <div className="rounded bg-gray-100 shadow-md p-3 flex flex-col gap-2">
         <div className="flex items-center justify-between text-md font-semibold">
            <h3 className="text-gray-500">Subtotal</h3>
            <span>$ {basketState.totalPrice}</span>
         </div>
         <div className="flex items-center justify-between text-md font-semibold">
            <h3 className="text-gray-500">Delivery cost</h3>
            <span>$ 20.00</span>
         </div>
         <h3 className="text-md font-semibold text-gray-500">Discount code</h3>
         <label className="flex">
            <input type="text" className="w-full h-8 rounded shadow"/>
            <button className="w-20 bg-blue-600 text-white rounded border-2 border-blue-600 hover:bg-white hover:text-blue-600">Use</button>
         </label>
         {state &&
            <div className="flex items-center justify-between text-md font-semibold mb-2">
               <h3 className="text-gray-500">Voucher discount</h3>
               <span className="text-red-500">-15%</span>
            </div>
         }
         <div className="flex items-center justify-between text-lg font-semibold border-t-2 pt-2">
            <h3>Total:</h3>
            <span>$ {basketState.totalPrice}</span>
         </div>
         <button className="bg-blue-600 text-white h-8 rounded border-2 border-blue-600 hover:bg-white hover:text-blue-600">Checkout</button>
      </div>
   );
};

export default BasketDetails;
