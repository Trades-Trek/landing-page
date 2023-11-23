import axios from 'axios'


export const url ='https://tradestrek.salitastech.com/api/v1'


const api =axios.create({
    baseURL: url,
});

export default api 
