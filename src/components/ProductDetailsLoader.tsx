const ProductDetailsLoader = () => {
   return (
      <div className="animate-pulse">
         <div className="h-64 bg-gray-500 rounded"></div>
         <div className="grid grid-cols-6 gap-2 mt-4">
            <div className="h-3 col-span-4 bg-gray-500 rounded"></div>
            <div className="h-3 col-span-1"></div>
            <div className="h-3 col-span-1 bg-gray-500 rounded"></div>
            <div className="h-3 col-span-2 bg-gray-500 rounded"></div>
            <div className="h-3 col-span-4 bg-gray-500 rounded"></div>
         </div>
         <div className="flex justify-end">
            <div className="bg-gray-500 h-3 w-52 rounded mt-5"></div>
         </div>
      </div>
   );
};

export default ProductDetailsLoader;