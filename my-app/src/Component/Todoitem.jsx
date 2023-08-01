import React from 'react'
import { useState } from 'react'
const Todoitem = ({title,status,id,deleteTodo,updateTodo}) => {
   const[update,setUpdate]=useState("")  
  return (
    <div>Todos Item
        <div >
            <h2>{title}  {status}</h2>
            {/* <button>Updat</button> */}
            <button onClick={()=>deleteTodo(id)}>Delete</button>
             <input type="text" placeholder='update title' onChange={((e)=>setUpdate(e.target.value))}/>
            <button onClick={() => updateTodo(id, { title: update})}>Update title</button>
        </div>
    </div>
  )
}

export default Todoitem