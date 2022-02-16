
import axios from "axios";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data; boundary=something'
}


export const getDataUser = async (user_id) =>
    axios.get(`https://api.ticvzla.xyz/public/api/get_data_user/${user_id}`);

export const postCreateProject = async (formData) => axios.post(`https://api.ticvzla.xyz/public/api/project_values`, formData, { headers: headers })

export const postLogin = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/login`, data)

export const postCreateAccount = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/register`, data)



