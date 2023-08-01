import React from 'react'
import { useEffect,useState } from 'react'
import  axios from 'axios'
import Todoinput from './Todoinput'
import Todoitem from './Todoitem'
 const TodoApp = () => {
const [todos,setTodo]=useState([])

useEffect(()=>{
    getTodo()  
},[])
const getTodo=()=>{
      axios.get('http://localhost:8080/todoList')
      .then((res)=>setTodo(res.data))
      .catch((err)=>console.log(err))
    }
     const addtodo=(newTodo)=>{
    
         axios.post('http://localhost:8080/todoList',newTodo)
         .then((res)=>setTodo([...todos,res.data]))
         .catch((err)=>console.log(err))
     }
     const deleteTodo=(id)=>{
         axios.delete(`http://localhost:8080/todoList/${id}`)
         .then(()=>getTodo())

     }
     const updateTodo = (id, obj) => {
        axios.patch(`http://localhost:8080/todoList/${id}`, obj)
          .then(() => getTodo())
          .catch((err) => console.log(err));
      };
    console.log(todos)
  return (
    <>
     <Todoinput addtodos={addtodo}/>
      <div style={{marginTop:"40px",marginLeft:"50px"}}>
        {
            todos.length>0 && todos.map((ele)=>(
                <Todoitem key={ele.id} {...ele}  deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))
        }
    </div>
    </>
    
  )
}

export default TodoApp