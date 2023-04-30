import axios from "axios";


export const getReq = async (url) => {
    return await axios.get(url);
}

export const postReq = async (url, data) => {
    return await axios.post(`${url}`, data)
}

export const putReq = async(url, data) => {
    return await axios.put(`${url}`, data)
}


export default fetch