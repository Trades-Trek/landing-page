import React from 'react'
import InputWithLabel from './InputWithLabel'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation } from "react-query";
import { GenegralResponseAndError, joinNewsLetterApi } from '../api/general.api';
import Loader from '../components/Loader'



const schema = yup.object({
    email:yup.string().email().required()
})
type NewsLetterI = yup.InferType<typeof schema>

const NewsLetter =()=>{

    const { register, handleSubmit, setValue,formState: { errors } } = useForm<NewsLetterI>({
        resolver: yupResolver(schema)
      })
      const {isLoading,mutate} = useMutation(joinNewsLetterApi,GenegralResponseAndError)
      const onSubmit = (data:NewsLetterI)=>{
        mutate(data)
      }
    return (
        <div className="container  mx-auto ">
          
  <section className="mb-10">

    <div className={`relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?w=740&t=st=1699869184~exp=1699869784~hmac=aa18922923b785d9d3956a49c3a6f35e26959ded91ff045aa56c40e083378cfd')]
    
    h-[300px]`}></div>
    <div className="container px-6 md:px-12">
      <div
        className="block rounded-lg 
        bg-[hsla(0,0%,100%,0.7)]
         px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-100px] backdrop-blur-[30px]">
        <form
        onSubmit={handleSubmit(onSubmit)}

        className="flex flex-wrap justify-center text-center lg:text-left">
          <div className="w-full shrink-0 grow-0 basis-auto md:px-6 xl:w-10/12">
            <div className="grid items-center gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold">
                  Do not miss any updates.
                  <br />
                  <span className="text-primary dark:text-primary-400 ">Subscribe to the <span className='text-palette-two'>
                  newsletter
                    </span> </span>
                </h2>
              </div>

              <div className="mb-6 flex-row md:mb-0 md:flex items-center">
                <div className="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                  {/* <input type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput2" placeholder="Enter your email" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                    your email
                  </label> */}
                  <InputWithLabel 
                label='Enter your email'
                  register={register('email')}
                  />
                </div>
                <button type="submit"
                  className='text-white border-0 rounded-[px] bg-palette-two  md:mt-3'
                  >
                    {isLoading?
            <Loader />   :'Subscribe'
                }
                  
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

    )
}

export default NewsLetter