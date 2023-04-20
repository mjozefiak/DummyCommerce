import {BasketItemInterface} from "../../interfaces/Basket";
import {basketActions} from "../../store/basket-slice";
import {AiOutlineMinus, AiOutlinePlus, IoBagRemove} from "react-icons/all";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";

const BasketItem = (props: BasketItemInterface) => {
   const dispatch = useDispatch()
   const [quantity, setQuantity] = useState(props.quantity)

   const updateQuantityHandler = (id: number, quantity: number) => {
      const details = {
         id,
         quantity
      }
      dispatch(basketActions.setQuantity(details))
   }
   const decrementQuantityHandler = () => {
      if (quantity > 1) {
         setQuantity((prevState) => {
            updateQuantityHandler(props.id, prevState - 1)
            return prevState - 1
         })
      } else {
         dispatch(basketActions.removeFromBasket(props.id))
      }
   }
   const incrementQuantityHandler = () => {
      setQuantity((prevState) =>{
         updateQuantityHandler(props.id, prevState + 1)
         return prevState + 1
      })

   }

   return (
      <div className="flex items-center border-b-2 p-2 mb-2 gap-5">
         <Link to={`/products/${props.id}`}>
            <img
               src={props.image}
               alt={props.title}
               className="w-12 object-contain m-2"
            />
         </Link>

         <div className="w-3/4 flex flex-col gap-1 items-start">
            <Link className="text-lg font-semibold" to={`/products/${props.id}`}>{props.title}</Link>
            <div className="flex justify-between items-center w-full">
               <span>{quantity === 1 ? `${quantity} item` : `${quantity} items`}</span>
               <div className="flex gap-1">
                  <button
                     className="w-5 h-5 inline-flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-white rounded"
                     onClick={decrementQuantityHandler}
                     type="button"
                  >
                     <AiOutlineMinus/>
                  </button>
                  <button
                     className="w-5 h-5 inline-flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-white rounded"
                     onClick={incrementQuantityHandler}
                     type="button"
                  >
                     <AiOutlinePlus/>
                  </button>
               </div>
            </div>
            <div className="flex justify-between items-center w-full">
               <span className="font-semibold text-lg">$ {(props.price * props.quantity).toFixed(2)}</span>
               <span className="text-xs whitespace-nowrap">{`Per unit: $ ${props.price.toFixed(2)}`}</span>
            </div>
         </div>
      </div>
   );
};

export default BasketItem;
