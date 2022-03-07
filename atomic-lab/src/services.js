
import axios from "axios";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data; boundary=something'
}


//user
export const getDataUser = async (user_id) => axios.get(`https://api.ticvzla.xyz/public/api/get_data_user/${user_id}`);

//projects
export const getActiveProjects = async (user_id) => axios.get(`https://api.ticvzla.xyz/public/api/get_data_user_active_projects/${user_id}`)
export const getFinishProjects = async (user_id) => axios.get(`https://api.ticvzla.xyz/public/api/get_data_user_finish_projects/${user_id}`)
export const postCreateProject = async (formData) => axios.post(`https://api.ticvzla.xyz/public/api/project_values`, formData, { headers: headers })

//Designers
export const postAssignDesignerProject = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/assign_designer`, data)
export const getAssignDesignerProject = async (id_project) => axios.get(`https://api.ticvzla.xyz/public/api/get_designers_by_prokect/${id_project}`)
export const deleteAssignDesignerProject = async (union_id) => axios.delete(`https://api.ticvzla.xyz/public/api/project_designers/${union_id}`)


//login
export const postLogin = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/login`, data)
export const postCreateAccount = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/register`, data)

//brands
export const getBrands = async (user_id) => axios.get(`https://api.ticvzla.xyz/public/api/get_data_user_brands/${user_id}`)
export const postCreateBrand = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/brands`, data)
export const putUpdateBrand = async ({ data, brand_id }) => axios.put(`https://api.ticvzla.xyz/public/api/brands/${brand_id}`, data)

//team
export const getTeam = async (user_id) => axios.get(`https://api.ticvzla.xyz/public/api/get_data_user_teams/${user_id}`)
export const postAddTeam = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/teams`, data)
export const deleteMemberTeam = async (member_id) => axios.delete(`https://api.ticvzla.xyz/public/api/teams/${member_id}`)

//attached
export const getAttached = async (user_id) => axios.get(`https://api.ticvzla.xyz/public/api/get_data_user_attached/${user_id}`)

//reviews
export const getReviewsProject = async (project_id) => axios.get(`https://api.ticvzla.xyz/public/api/update_review_data/${project_id}`)

//annotations
export const postCreateAnnotation = async (data) => axios.get(`https://api.ticvzla.xyz/public/api/annotations`, data)