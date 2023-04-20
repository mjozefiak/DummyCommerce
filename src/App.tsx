import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home"
import ErrorPage from "./pages/Error";
import CategoryPage, {loader as productsFromCategoryLoader} from "./pages/Category";
import {menuLoader} from "./pages/Root";
import ProductPage, {loader as productLoader} from "./pages/Product";
import BasketPage from "./pages/Basket";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" id="root" element={<RootLayout/>} loader={menuLoader}>
         <Route index element={<HomePage/>}/>

         <Route path="categories">
            <Route
               path=":category"
               element={<CategoryPage/>}
               loader={productsFromCategoryLoader}
               errorElement={<ErrorPage/>}
            />
         </Route>

         <Route path="products">
            <Route path=":productId" element={<ProductPage/>} loader={productLoader}/>
         </Route>

         <Route path="basket" element={<BasketPage/>}></Route>

         <Route path="*" element={<ErrorPage/>}/>
      </Route>
   )
)

function App() {
   return (
      <div className="App dark:bg-gray-700">
         <RouterProvider router={router}/>
      </div>
   )
}

export default App
