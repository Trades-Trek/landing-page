import { ContactI } from '@/components/pagesComponent/Contact/sections/SectionOne'
import {WaitListI} from '@/components/pagesComponent/JoinWaitList/JoinWaitList'
import { handlError } from '../utils/extraFunc'
import api from './axios'
import toast from "react-hot-toast"
import { 
  mockCompanyInfo, 
  mockAboutUs, 
  mockFaqContent, 
  mockCommunityPageContent, 
  mockContactPageContent,
  mockFaqs, 
  mockKeyFeatures, 
  mockPricing, 
  mockTestimonials, 
  mockPages 
} from './mockData'

type SuccessResponse ={
    status:string,
    message:string,
    data:any
}
export const GenegralResponseAndError = {
    'onSuccess':(data:any)=>{
        toast.success(data.message)
      },
      'onError':(err:any)=>{
        handlError(err)
      }
}
export const cachedTime = {cacheTime:10000 * 600 * 50}
export const communitySignUpApi = async(data:WaitListI):Promise<SuccessResponse>=>{
  // Mock implementation - simulates successful signup
  return {
    status: 'success',
    message: `Welcome ${data.first_name}! You've been added to our waitlist.`,
    data: { id: Math.random() }
  }
}

export const submitContactApi = async (data:ContactI)=>{
  // Mock implementation - simulates successful form submission
  return {
    status: 'success',
    message: `Thank you ${data.first_name}! We've received your message and will get back to you soon.`,
    data: { id: Math.random() }
  }
}

export type FaqI = {
  subject:string,
  question:string,
  answer:string

}
export const getFaqApi = async ({query=''}:{query?:string}):Promise<FaqI[]>=>{
  // Mock data implementation - filters FAQs by subject if query parameter contains subject
  if (query && query.includes('subject=')) {
    const subject = query.split('subject=')[1]
    return mockFaqs.filter(faq => faq.subject.toLowerCase() === subject.toLowerCase())
  }
  return mockFaqs
}


type KeyFeature ={
  title:string,
  description:string,
  image:string
}

export const getKeyFeatureApi = async():Promise<KeyFeature[]>=>{
  return mockKeyFeatures
}


export type Pricing ={
  "name": string,
  "monthly_price": string,
  "monthly_price_discount":string,
  "yearly_price": string,
  "yearly_price_discount": string,
  "features": {
      "field1": string,
      "field2": number,
      "field3": string
  }
}
export const getPricing = async ():Promise<Pricing[]>=>{
  return mockPricing
}

export type TestimonialI = {
  "first_name": string,
  "last_name": string,
  "occupation":string,
  "company_name": string,
  "position": string,
  "rating": string,
  "review": string,
  "image": string
}
export const getTestimonials = async ():Promise<TestimonialI[]>=>{
  return mockTestimonials
}




export const joinNewsLetterApi = async ({email}:{email:string})=>{
  // Mock implementation - simulates successful newsletter signup
  return {
    status: 'success',
    message: 'Successfully subscribed to our newsletter!',
    data: { email }
  }
}

type CompanyInfoI = {
  "support_email": string,
  "contact_email": string,
  "address_ln1": string,
  "address_ln2": string,
  "city": string,
  "state": string,
  "country": string,
  "phone": null|string|number,
  "ios_download_url":string,
  "android_download_url": string,
  "dynamic_link": string,
  "facebook_url": string,
  "twitter_url": string,
  "instagram_url": string,
  "linkedin_url": string,
  "pinterest_url": string,
  "threads_url": string,
  "site_description": string,
  "mission_statement": string,
  "vision_statement": string,
  'home_page_banner':string
}
export const getCompanyInfoApi = async ():Promise<CompanyInfoI>=>{
  return mockCompanyInfo
}

//get pages content
type AboutUsI ={
  title:string,
  subtitle:string,
  content:string,
  images:{
    banner:string
  },
}
export const getAboutUs = async():Promise<AboutUsI>=>{
  return mockAboutUs
}



type FaqContentI = {
  "title": string,
        "subtitle":string,
        "content": string,
        "images": {"banner": string}
}
export const getFaqContent =  async ():Promise<FaqContentI>=>{
  return mockFaqContent
}



export const getCommunityPage = async():Promise<FaqContentI>=>{
  return mockCommunityPageContent
}

export const getContactPage =  async():Promise<FaqContentI>=>{
  return mockContactPageContent
}



type PageResponseI ={
  title:string,
  subtitle:string,
  content:string,
  meta_description:string,
  images:{
    banner:string
  },
}

export const getPageApi =  async({page}:{page: 'home'|'about-us'|'join-community'|'contact-us'|'faq'}):Promise<PageResponseI>=>{
  return mockPages[page as keyof typeof mockPages]
}