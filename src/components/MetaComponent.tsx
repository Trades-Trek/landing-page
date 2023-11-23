import React from "react"
import { Helmet } from "react-helmet"
import { useQuery } from "react-query"
import { cachedTime, getCompanyInfoApi, getPageApi } from "../api/general.api"

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
    return (
        <>
        {
            page?
            // @ts-ignore
            <Helmet
            title= {data?.title??'Trades Trek'}
            meta={[
            {"name": data?.meta_description??'',
             "content": ''},
            {property: "og:type", content: "website"},
            {property: "og:title", content: data?.title??'Trades Trek'},
            {property: "og:image", content: data?.images.banner??''},
            {property: "og:url", content: window.location.href}
            ]}
            />:
            // @ts-ignore
            <Helmet
            title= {'Trades Trek'}
            meta={[
            {"name": data?.meta_description??'',
             "content": ''},
            {property: "og:type", content: "website"},
            {property: "og:title", content: 'Trades Trek'},
            {property: "og:image", content: homeData?.home_page_banner},
            {property: "og:url", content: window.location.href}
            ]}
            />
        }
        </>
    )
}

export default MetaComponent