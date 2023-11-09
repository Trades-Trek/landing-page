import toast from "react-hot-toast"




export const handlError = (err:any,customErr='Please check your internet connection')=>{
    console.log({'from api':err.response.data})
    if(err?.response?.data?.message){
        toast.error(err?.response?.data?.message)
    }else{
        toast.error(customErr)
    }
}