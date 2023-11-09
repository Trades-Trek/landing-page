import {WaitListI} from '../pages/JoinWaitList/JoinWaitList'
import api from './axios'

type SuccessResponse ={
    status:string,
    message:string,
    data:any
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