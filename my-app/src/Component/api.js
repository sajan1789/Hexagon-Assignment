
import axios from "axios"
 export const getProduct =async ()=>{
     let res =await axios.get(`http://localhost:8080/todoList`)
     return res.data;
 }
 export const addProduct=async (obj)=>{
    let res =await axios.post(`http://localhost:8080/todoList`,obj)
     return res.data;
 }
export const deleteData=async (id)=>{
    let res = await axios.delete(`http://localhost:8080/todoList/${id}`)

} 
export const updateLike =async (id )=>{
    let res =await axios.get(`http://localhost:8080/todoList/${id}`)
     let like={like: res.data.like+1}
     axios.patch(`http://localhost:8080/todoList/${id}`,like)    
}
export const updateDislike =async (id )=>{
   let res=await axios.get(`http://localhost:8080/todoList/${id}`)
   let dislike={dislike: res.data.dislike+1}
     axios.patch(`http://localhost:8080/todoList/${id}`,dislike)
}