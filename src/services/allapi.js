import axios from "axios";
 const base_url="https://cm-server2.onrender.com"

export const addcontactsapi=async (data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}
export const getcontactsapi=async()=>{
    return await axios.get(`${base_url}/contacts`)
}
// export const getcontactdetail=async()=>{
//     return await axios.get(`${base_url}/contacts/${id}`)
// }
export const deletecontactsapi=async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}
