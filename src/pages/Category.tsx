import {Await, defer, LoaderFunctionArgs, useLoaderData, useParams} from "react-router-dom";
import {ProductInterface, ProductsInterface} from "../interfaces/Product";
import product from "../components/Product";
import Product from "../components/Product";
import {Suspense} from "react";
import ProductLoader from "../components/ProductLoader";

const CategoryPage = () => {

   const {products} = useLoaderData() as ProductsInterface
   const {category} = useParams()

   return (
      <>
         <h2 className="capitalize text-md ml-2 my-5">
            Products <br/>
            <span className="font-semibold text-blue-600 text-xl">in {category}</span>
         </h2>
         <main className="grid grid-cols-2 gap-10 px-3 mt-10">
            <Suspense fallback={<ProductLoader />}>
               <Await resolve={products}>
                  {(loadProducts: ProductInterface[]) => loadProducts.map((product) => (
                     <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        image={product.image}
                        rating={product.rating}
                     />
                  ))}
               </Await>
            </Suspense>
         </main>
      </>
   )
}

export default CategoryPage
const loadProductsFromCategory = async (category: string | undefined): Promise<ProductsInterface> => {
   const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
   if (!res.ok) {

   }
   return await res.json()
}

export const loader = async ({params}: LoaderFunctionArgs)  => {
   const products = loadProductsFromCategory(params.category)
   return defer({products})
}