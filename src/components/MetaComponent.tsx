import React from "react"
import { useQuery } from "react-query"
import { cachedTime, getCompanyInfoApi, getPageApi } from "../api/general.api"
import Head from 'next/head'
import { usePathname } from "next/navigation";
'use Client';

type Prop ={
    page?: 'home'|'about-us'|'join-community'|'contact-us'|'faq'
}
const  MetaComponent =({page}:Prop) =>{
    const  {isLoading,data}  = useQuery(['pages',page],()=>getPageApi({'page':page??'home'}),{
      enabled:page!='home',...cachedTime
    })
    
    const {data:homeData} = useQuery('getCompanyInfoApi',getCompanyInfoApi,{
        ...cachedTime,'enabled':page=='home'
    })

    const pathname = usePathname()
    const href = `https://www.tradestrek.com${pathname}`
    return (
        <>
       
        {
            page?
            <Head>
                <title>
                {data?.title??'Trades Trek'}
                </title>

                <meta property="og:type" content="website" ></meta>
                <meta property="og:title" content={ data?.title??'Trades Trek'} ></meta>
                <meta property="og:image" content={  data?.images.banner??''} ></meta>
                <meta property="og:url" content={  href} ></meta>
            </Head>
        :
        <Head>
                <title>
                    {'Trades Trek'}
                </title>

                <meta property="og:type" content="website" ></meta>
                <meta property="og:title" content={  'Trades Trek'} ></meta>
                <meta property="og:image" content={  homeData?.home_page_banner} ></meta>
                <meta property="og:url" content={ href} ></meta>
        </Head>

        }
        </>
    )
}

export default MetaComponent