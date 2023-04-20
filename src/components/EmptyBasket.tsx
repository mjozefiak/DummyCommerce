import {Link} from "react-router-dom";
import {basketActions} from "../store/basket-slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";

const EmptyBasket = () => {
   const basketState = useSelector((state: RootState) => state.basket)
   const dispatch = useDispatch()

   return (
      <div className="flex justify-center items-center flex-col mt-12">
         <img src="/empty.png" alt="Your cart is empty"/>
         <h3 className="text-2xl font-bold mt-4">Your cart is empty</h3>
         <p className="text-center mt-1 text-gray-500">Look you haven't added anything to your cart yet</p>
         <Link
            to='/'
            onClick={() => basketState.isVisible && dispatch(basketActions.toggleVisibility())}
            className="bg-blue-600 text-white py-2 px-5 rounded mt-4"
         >
            Shop now
         </Link>
      </div>
   );
};

export default EmptyBasket;
