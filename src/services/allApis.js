

import axios from "axios";

const baseUrl="https://employee-server-dryl.onrender.com"

export const addEmployeeApi=async(data)=>{

    return await axios.post(`${baseUrl}/addemp`,data) 

}

export const getEmployeeApi=async()=>{
    return await axios.get(`${baseUrl}/getemp`)
}
export const deleteEmployee=async(id)=>{
    return await axios.delete(`${baseUrl}/deleteemp/${id}`)
}
export const updateEmployee=async(id,data)=>{
    return await axios.put(`${baseUrl}/updateemp/${id}`,data)
}