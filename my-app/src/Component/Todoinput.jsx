import React from 'react'
import { useState } from 'react'
const Todoinput = ({addtodos}) => {
    const [title,setValue]=useState("")
    const [status, setStatus] = useState('');
  const [error, setError] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim() && status){
            let data={
                title:title,
                status:status
                
            }
            addtodos(data)
           
        }
        else{
            alert("title and status can not be empty")
        }
        
        
    }
  return (
    <div>
       <div>Add New Todo</div>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' onChange={(e)=>setValue(e.target.value)}/>
        <select value={status} onChange={((e)=>setStatus(e.target.value))}>
         <option value="">Select Status</option>
        <option value="Complete">Complete</option>
        <option value="Incompleted">InCompleted</option>
      </select>
        <button type='submit'>Add</button>
     </form>
    </div>
    
  )
}

export default Todoinput