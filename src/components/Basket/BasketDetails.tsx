import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useRef} from "react";
import {basketActions} from "../../store/basket-slice";

const BasketDetails = () => {
   const basketState = useSelector((state: RootState) => state.basket)
   const dispatch = useDispatch()
   const ref = useRef<HTMLInputElement>(null)
   const useVoucherHandler = () => {
      dispatch(basketActions.setVoucher(ref.current?.value))
   }

   return (
      <div className="rounded bg-gray-100 shadow-md p-3 flex flex-col gap-2">
         <div className="flex items-center justify-between text-md font-semibold">
            <h3 className="text-gray-500">Subtotal</h3>
            <span>$ {basketState.subtotalPrice}</span>
         </div>
         <div className="flex items-center justify-between text-md font-semibold">
            <h3 className="text-gray-500">Delivery cost</h3>
            <span>$ {basketState.delivery.price.toFixed(2)}</span>
         </div>
         <h3 className="text-md font-semibold text-gray-500">Discount code</h3>
         <label className="flex">
            <input type="text" className="w-full h-8 rounded shadow p-2 text-gray-600 text-sm font-semibold" ref={ref}/>
            <button className="w-20 bg-blue-600 text-white rounded border-2 border-blue-600 hover:bg-white hover:text-blue-600" onClick={useVoucherHandler}>Use</button>
         </label>
         {basketState.voucher &&
            <div className="flex items-center justify-between text-md font-semibold mb-2">
               <h3 className="text-gray-500">Voucher discount</h3>
               <span className="text-red-500">-{basketState.voucher}%</span>
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
