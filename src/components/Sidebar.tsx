import {IoCloseOutline} from "react-icons/io5";
import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {Sidebar, SidebarBackdrop} from "../interfaces/Sidebar";
import {menuActions} from "../store/menu-slice";


const overlayPortal: HTMLElement = document.querySelector('#overlay')!


const Backdrop = (props: SidebarBackdrop) => {
   return createPortal(
      <>
         <div className="bg-black bg-opacity-20 absolute h-full w-full flex justify-end" onClick={props.closeSidebar}>
         </div>
         <div className="absolute h-full w-2/3 right-0">
         {props.children}
         </div>
      </>,
      overlayPortal
   )
}
const Sidebar = (props: Sidebar) => {
   const dispatch = useDispatch()
   const closeSidebarHandler = () => {
      if (props.type === 'MENU') {
         dispatch(menuActions.toggle())
      } else {

      }
   }

   return (
      <Backdrop closeSidebar={closeSidebarHandler}>
         <aside className="min-h-full bg-white shadow-2xl">
            <div className="flex items-center gap-5 bg-black bg-opacity-10 py-4 px-4 shadow-sm">
               <button className="p-1 hover:bg-gray-300 rounded-full" onClick={closeSidebarHandler}>
                  <IoCloseOutline className="text-2xl"/>
               </button>
               <h3 className="text-xl font-semibold">{props.name}</h3>
            </div>
            <div className="px-4 mt-3">
               {props.children}
            </div>
         </aside>
      </Backdrop>
   )
}

export default Sidebar