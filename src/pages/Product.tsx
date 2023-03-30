import {Await, defer, LoaderFunctionArgs, useLoaderData, useNavigate} from "react-router-dom";
import {AiOutlineLeft} from "react-icons/ai";
import ProductDetails from "../components/Product/ProductDetails";
import {Suspense} from "react";
import ProductDetailsLoader from "../components/Product/ProductDetailsLoader";
import {getProducts} from "../helpers/fetch";

const ProductPage = () => {
   const navigate = useNavigate()
   const { product } = useLoaderData() as any

   return (
      <>
         <button
            className="flex items-center gap-2 py-1 px-2 ml-1 mt-2 rounded hover:bg-gray-200"
            onClick={() => navigate(-1)}
         >
            <AiOutlineLeft/>
            <span>Back</span>
         </button>

         <main className="mt-4 px-4">
            <Suspense fallback={<ProductDetailsLoader/>}>
               <Await resolve={product}>
                  {(loadedProduct) => <ProductDetails product={loadedProduct}/>}
               </Await>
            </Suspense>
         </main>
      </>
   );
};

export default ProductPage;


export const loader = async ({params}: LoaderFunctionArgs) => {
   const productPromise = await getProducts(params.productId)
   return defer({ product: productPromise })
}
