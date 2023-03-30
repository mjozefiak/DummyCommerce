import {ChangeEvent, FormEvent, forwardRef, useState} from "react";

const NumberInput = forwardRef<HTMLInputElement>((props, ref) => {
   const [inputValue, setInputValue] = useState(1)

   const incrementInputHandler = (e: FormEvent) => {
      e.preventDefault()
      setInputValue(inputValue + 1)
   }
   const decrementInputHandler = (e: FormEvent) => {
      e.preventDefault()
      if(inputValue > 0){
         setInputValue(inputValue - 1)
      }
   }

   const userChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setInputValue(Number(e.target.value))
   }

   return (
      <div className="flex items-center">
         <button className="w-8 h-10 border-gray-500 border-2 rounded-l hover:border-blue-500 hover:bg-blue-500 hover:text-white" onClick={decrementInputHandler} type="button">-</button>
         <input
            className="text-center w-10 h-10 border-gray-500 border-y-2"
            value={inputValue}
            type="number"
            ref={ref}
            onChange={userChangeInputHandler}
         />
         <button className="w-8 h-10 border-gray-500 border-2 rounded-r hover:border-blue-500 hover:bg-blue-500 hover:text-white" onClick={incrementInputHandler} type="button">+</button>
      </div>
   );
})

export default NumberInput;
