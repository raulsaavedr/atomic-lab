
import axios from "axios";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data; boundary=something'
}


export const getDataUser = async (user_id) =>
    axios.get(`https://api.ticvzla.xyz/public/api/get_data_user/${user_id}`);

//project    
export const postCreateProject = async (formData) => axios.post(`https://api.ticvzla.xyz/public/api/project_values`, formData, { headers: headers })

//login
export const postLogin = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/login`, data)
export const postCreateAccount = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/register`, data)

//brands
export const postCreateBrand = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/brands`, data)
export const putUpdateBrand = async ({ data, brand_id }) => axios.put(`https://api.ticvzla.xyz/public/api/brands/${brand_id}`, data)

//team
export const postAddTeam = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/teams`, data)
export const deleteMemberTeam = async (member_id) => axios.delete(`https://api.ticvzla.xyz/public/api/teams/${member_id}`)
