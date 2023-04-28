import axios from "axios";


export const getReq = async (url, data) => {

    let json = { params: data }
  

    return await axios.get(url, json);
}

export const postReq = async (url, data) => {
    await axios.post(`${url}`, data)
        .then(function (response) {
            return response
        }).catch(function (err) {
            console.log("Error: " + err)
        })
}


export default fetch