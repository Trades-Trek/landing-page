import Navbar from "@/components/Navbar"
import React from "react"
import Footer from '@/components/Footer'

type Prop = React.PropsWithChildren<{}>
const GeneralLaout = ({children}:Prop)=>{


    return (
        <div className='w-full'>
        <div className='w-full bg-palette-one'>

        <div className="max-w-[1200px] mx-auto px-3 md:px-0" >
        <Navbar />
      </div>
      </div>   

      {children}
      <Footer />         
        </div>
    )
}

export default GeneralLaout