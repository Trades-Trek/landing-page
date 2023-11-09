
import React from "react"


type Prop = {
    label:string,
    register:any,
    errorMessage?:string|null
}
const InputWithLabel = ({label,register,errorMessage}:Prop)=>{


    return (
        <div className="mb-6">
        <label htmlFor="" className="font-medium block mb-2.5">
          {label}
        </label>
        <input
          className="w-full px-4 h-14 bg-white border border-[#979797] rounded-lg"
          {...register}
        />
        {
            errorMessage?
            <small style={{'color':'crimson'}}>{errorMessage?.replace(/[^\s]*/,label?label:'')}</small>
            :''
        
        }
      </div>
    )
}

export default InputWithLabel