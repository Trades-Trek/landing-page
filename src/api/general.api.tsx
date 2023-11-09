import { ContactI } from '../pages/Contact/sections/SectionOne'
import {WaitListI} from '../pages/JoinWaitList/JoinWaitList'
import { handlError } from '../utils/extraFunc'
import api from './axios'
import toast from "react-hot-toast"

type SuccessResponse ={
    status:string,
    message:string,
    data:any
}
export const GenegralResponseAndError = {
    'onSuccess':(data)=>{
        toast.success(data.message)
      },
      'onError':(err:any)=>{
        handlError(err)
      }
}

export const communitySignUpApi = async(data:WaitListI):Promise<SuccessResponse>=>{
    const form = new FormData()
    form.append('first_name',data.first_name)
    form.append('last_name',data.last_name)
    form.append('birth_year',data.birth_year.toString())
    form.append('email',data.email)
    form.append('phone_number',data.phone_number.toString())
    const resp = await api.post('/community-sign-up',form)
    return resp.data
}

export const submitContactApi = async (data:ContactI)=>{
    const form = new FormData()
    form.append('first_name',data.first_name)
    form.append('last_name',data.last_name)
    form.append('subject',data.subject)
    form.append('message',data.message)
    form.append('email',data.email)
    form.append('phone',data.phone)
  const resp = await api.post('/contact',form)
  return resp.data
}

export type FaqI = {
  subject:string,
  question:string,
  answer:string

}
export const getFaqApi = async ({query=''}:{query?:string}):Promise<FaqI[]>=>{
  // let query = 

  const resp = await api.get(`faq${query}`)
  return resp.data.data
}


type KeyFeature ={
  title:string,
  description:string,
  image:string
}

export const getKeyFeatureApi = async():Promise<KeyFeature[]>=>{
  

  const resp = await api.get(`/features`)
  return resp.data.data
}