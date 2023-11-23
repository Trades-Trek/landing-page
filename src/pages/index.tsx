import React from 'react'
import Image from 'next/image'
import SectionOne from '@/components/pagesComponent/Homepage/sections/SectionOne'
import SectionTwo from '@/components/pagesComponent/Homepage/sections/SectionTwo'
import SectionThree from '@/components/pagesComponent/Homepage/sections/SectionThree'
import SectionFour from '@/components/pagesComponent/Homepage/sections/SectionFour'
import SectionFive from '@/components/pagesComponent/Homepage/sections/SectionFive'
import SectionSix from '@/components/pagesComponent/Homepage/sections/SectionSix'
import { Inter,Poppins } from 'next/font/google'
import NewsLetter from '@/components/NewsLetter'
import Navbar from '@/components/Navbar'


// const inter = Poppins({ subsets: ['latin-ext'] })

export default function Home() {
  return (
    <div className='w-full'>
        <div className='w-full bg-palette-one'>

        <div className="max-w-[1200px] mx-auto px-3 md:px-0" >
        <Navbar />
      </div>
      </div>

      <SectionOne/>
      <SectionTwo />
      <SectionThree />
        
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <NewsLetter />
    
    </div>
  )
}
