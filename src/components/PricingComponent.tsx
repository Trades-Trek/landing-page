import { useRouter } from 'next/router';
import React, { useState } from 'react'
// @ts-ignore
import checkmark from '../assets/checkbox.svg'
import { features } from 'process'
import { motion } from 'framer-motion'
import { cachedTime, getCompanyInfoApi } from '../api/general.api'
import { useQuery } from 'react-query'
type Prop ={
isMain?:boolean
planName:string,
planNameColor:'1st'|'2nd'|'3rd',
planAmount:number,
planYearType:string,
planFeatures:string[]
}
const PricingComponent = ({isMain=false,planName,planNameColor,planAmount,planYearType,planFeatures}:Prop)=>{
    const  {isLoading,data} = useQuery('getCompanyInfoApi',getCompanyInfoApi,cachedTime)
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
    return (
        <motion.div
        className={`bg-white text-center w-80 md:w-45 py-16  rounded-lg md:rounded-2xl ${isMain?'py-32  border-4 border-[rbga(140, 26, 255, 0.15)]':' shadow-md'} `}
        // style={{'border':'1px solid red'}}
        whileHover={{
        'scale':1.1
        }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
        >
            <div className='pb-4'>
                {/* heading */}
                <h2 className={`font-semibold  text-xl ${(planNameColor==='1st')?'text-[#F56949]':''}
                ${planNameColor=='2nd'?'text-[#8C1AFF]':''}
                ${planNameColor=='3rd'?'text-[#1AFFAB]':''}
              `}>{planName} Plan</h2>
                <h1 className='pt-2 font-semibold text-black font-poppins'>₦{planAmount}</h1>
                <p className='text-[#0D0D0D]'>{planYearType}</p>
            </div>
            <ul   className='text-black mb-8 text-left' >

{
    planFeatures?.map((d,index)=>(
        <li 
        key={index}
        className='flex font-normal  justify-center items-center gap-x-1 py-2 text-[#0D0D0D] text-lg ' >
        <img src={checkmark}  style={{'width':'20px'}}alt="" />
        <span>{d}</span></li>
    ))
}
            </ul>

            <button style={{'outline':'none'}} 
            onClick={e=>{
                router.push('/#download')
            }}
           className={`w-64 rounded-full mb-3  ${
          isHovering
            ? "bg-[#8C1AFF] text-white"
            : "text-black border-[#8C1AFF] border-2 bg-white"
        }`}>  
                Get Started
            </button>
            {/* <p className='text-[#0D0D0D] font-semibold'>It{"’"}s free so why not</p> */}
        </motion.div>
    )
}

export default PricingComponent
