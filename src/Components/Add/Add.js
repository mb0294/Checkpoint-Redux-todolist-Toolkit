import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../features/todoSlice'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Add = () => {

  const dispatch = useDispatch()
  const [newDesc, setNewDesc] = useState("")
  


  return (
    <div>
      <input  onChange={(e)=>setNewDesc(e.target.value)} type="text" />
      <Button variant="success" onClick={()=>dispatch(add({description:newDesc,isDone:false,id:uuidv4()}))} >Add Task</Button>
    </div>
  )
}


export default Add

