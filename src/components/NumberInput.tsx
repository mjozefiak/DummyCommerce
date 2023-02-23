import React from "react";

const NumberInput = () => {


   return (
      <div className="flex items-center">
         <button className="w-8 h-10 border-gray-500 border-2 rounded-l hover:border-blue-500 hover:bg-blue-500 hover:text-white">-</button>
         <input
            className="text-center w-10 h-10 border-gray-500 border-y-2"
            defaultValue={1}
            type="number"
         />
         <button className="w-8 h-10 border-gray-500 border-2 rounded-r hover:border-blue-500 hover:bg-blue-500 hover:text-white">+</button>
      </div>
   );
};

export default NumberInput;