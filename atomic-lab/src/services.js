
import axios from "axios";

export const getDataUser = async (user_id) =>
    axios.get(`https://api.ticvzla.xyz/public/api/get_data_user/${user_id}`);



const headers = {
    'Content-Type': 'multipart/form-data; boundary=something'
}

export const postCreateProject = async (data) => axios.post(`https://api.ticvzla.xyz/public/api/project_values`, data, { headers: headers })
