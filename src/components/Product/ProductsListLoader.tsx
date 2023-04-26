import React from 'react';

const ProductsListLoader = () => {
   return (
      <>
         <div className="animate-pulse flex flex-col">
            <div className="rounded bg-slate-600 h-32 w-full"></div>
            <div className="grid grid-cols-6 space-y-2 py-2">
               <div className="h-2 col-span-6 bg-slate-700 rounded"></div>
               <div className="h-2 col-span-3 bg-slate-700 rounded"></div>
               <div className="h-2 col-span-1 rounded"></div>
               <div className="h-2 col-span-2 bg-slate-700 rounded"></div>
            </div>
            <div className="space-y-3">
               <div className="grid grid-cols-4 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ProductsListLoader;
