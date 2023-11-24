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
import GeneralLaout from '@/layout/GeneralLaout'
import MetaComponent from '@/components/MetaComponent'


// const inter = Poppins({ subsets: ['latin-ext'] })

export default function Home() {
  return (
      <GeneralLaout>
        <MetaComponent
        page='home'
        />
        <SectionOne/>
        <SectionTwo />
        <SectionThree />
          
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <NewsLetter />
    
      </GeneralLaout>
  )
}
