import React from 'react'
import Image from 'next/image'
import SectionOne from '@/components/pagesComponent/Homepage/sections/SectionOne'
import SectionTwo from '@/components/pagesComponent/Homepage/sections/SectionTwo'
import SectionThree from '@/components/pagesComponent/Homepage/sections/SectionThree'
import SectionFour from '@/components/pagesComponent/Homepage/sections/SectionFour'
import SectionFive from '@/components/pagesComponent/Homepage/sections/SectionFive'
import SectionSix from '@/components/pagesComponent/Homepage/sections/SectionSix'
import { Inter } from 'next/font/google'
import NewsLetter from '@/components/NewsLetter'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
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
