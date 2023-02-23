import {Await, NavLink, useLoaderData, useRouteLoaderData} from "react-router-dom";
import {AiOutlineRight} from "react-icons/ai";
import {MenuInterface} from "../interfaces/Menu";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {menuActions} from "../store/menu-slice";

const Menu = () => {
   const {categories} = useRouteLoaderData('root') as MenuInterface

   const dispatch = useDispatch()

   const menuState = useSelector((state: RootState) => state.menu.isVisible)
   const changeMenuStateHandler = () => {
      dispatch(menuActions.toggle())
   }

   return (
      <>
         <h4 className="text-xs font-semibold text-gray-500 mb-4 mt-1">Categories</h4>
         <Await resolve={categories}>
            {(loadedCategories: string[]) =>
            <ul className="flex flex-col gap-3 text-md">
               {loadedCategories.map((category, index) => (
                  <li key={index} onClick={changeMenuStateHandler}>
                     <NavLink
                        className={({isActive}) =>
                           isActive
                              ? "capitalize flex items-center gap-3 px-2 py-1 bg-blue-400 text-white rounded"
                              : "capitalize flex items-center gap-3 px-2 py-1 rounded hover:bg-gray-100"
                        }
                        to={`/categories/${category}`}
                     >
                        <AiOutlineRight/>
                        {category}
                     </NavLink>
                  </li>
               ))}
            </ul>
            }
         </Await>
      </>
   )
}

export default Menu