import axios from "axios";


export const getReq = async (url, data) => {

    let json = { params: data }


    return await axios.get(url, json);
}

export const postReq = async (url, data) => {
    return await axios.post(`${url}`, data)
}

export const putReg = async(url, data) => {
    return await axios.put(`${url}`, data)
}


export default fetch