
import axios from "axios";

export const getDataUser = async (user_id) =>
    axios.get(`https://api.ticvzla.xyz/public/api/get_data_user/${user_id}`);

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data; boundary=something'
}

export const postCreateProject = async (formData) => axios.post(`https://api.ticvzla.xyz/public/api/project_valuess`, formData, { headers: headers })

/* export const postCreateProjectImg = async (content) => axios.post(`https://api.ticvzla.xyz/public/api/images`, content, { headers: headers }) */
