import {basketActions} from "../../../store/basket-slice";
import {IoBagRemove} from "react-icons/all";
import {useDispatch} from "react-redux";
import {BasketItemInterface} from "../../../interfaces/Basket";
import {Link} from "react-router-dom";

const BasketItem = (props: BasketItemInterface) => {
   const dispatch = useDispatch()

   return (
      <li className="w-full border flex items-center p-2 gap-5 rounded">
         <Link className="w-12" to={`/products/${props.id}`}>
            <img
               src={props.image}
               alt={props.title}
               className="w-12 h-full"
            />
         </Link>
         <div className="flex flex-col justify-between gap-3">
            <div className="flex justify-between">
               <Link to={`/products/${props.id}`} className="font-semibold text-sm">{props.title}</Link>
               <button className="h-fit p-2" onClick={() => {
                  dispatch(basketActions.removeFromBasket(props.id))
               }}>
                  <IoBagRemove className="text-lg text-red-600 cursor-pointer hover:text-red-300"/>
               </button>
            </div>
            <div className="flex justify-between">
               <span>$ {props.price.toFixed(2)}</span>
               <label className="flex items-center text-xs">
                  Quantity:
                  <input
                     className="w-7 text-center text-base font-semibold"
                     type="number"
                     defaultValue={props.quantity}
                     onBlur={(e) => {
                        const data = {
                           id: props.id,
                           quantity: e.target.value
                        }
                        if (Number(data.quantity) === 0) {
                           dispatch(basketActions.removeFromBasket(props.id))
                        } else {
                           dispatch(basketActions.setQuantity(data))
                        }
                     }}>
                  </input>
               </label>
            </div>
         </div>
      </li>
   );
};

export default BasketItem;
