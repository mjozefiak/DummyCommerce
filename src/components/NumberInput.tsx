import {ChangeEvent, FormEvent, forwardRef, useState} from "react";

const NumberInput = forwardRef<HTMLInputElement>((props: any, ref) => {
   const size = props.size === "sm" ? "6" : "10"
   const [inputValue, setInputValue] = useState(props.value ? props.value : 1)

   const incrementInputHandler = (e: FormEvent) => {
      e.preventDefault()
      setInputValue(inputValue + 1)
   }
   const decrementInputHandler = (e: FormEvent) => {
      e.preventDefault()
      if(inputValue > 1){
         setInputValue(inputValue - 1)
      }
   }

   const userChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setInputValue(Number(e.target.value))
   }

   return (
      <div className="flex items-center">
         <button className={`w-8 h-${size} border-gray-400 border border-r-0 rounded-l hover:bg-gray-300 hover:text-white`} onClick={decrementInputHandler} type="button">-</button>
         <input
            className={`text-center w-10 h-${size} border-gray-400 border-y`}
            value={inputValue}
            type="number"
            ref={ref}
            onChange={userChangeInputHandler}
         />
         <button className={`w-8 h-${size} border-gray-400 border-l-0 border rounded-r hover:bg-gray-300 hover:text-white`} onClick={incrementInputHandler} type="button">+</button>
      </div>
   );
})

export default NumberInput;
