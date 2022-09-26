import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeStatus, deleteTask, editTask } from '../../features/todoSlice'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Task.css'
const Task = ({el}) => {
  const [deskEdit, setDeskEdit] = useState(el.description)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()
  const handleClick = ()=> {
    setEdit(!edit)
    if(edit){
    dispatch(editTask({id:el.id,deskEdit}))}
  }



  return (
    <div >
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}} >
      

      
      <div> {edit?<input type="text" Value={el.description} onChange={(e)=>setDeskEdit(e.target.value)} />:<h1 style={el.isDone? {color :`Black`}:{color :`red`}}>{el.description}</h1>}</div>
      <div>
        
      <Button class="btn btn-primary"onClick={()=>dispatch(changeStatus(el.id))} >{el.isDone? "unDone":"Done"}</Button>
      <Button variant="info" onClick={handleClick} >{edit?"Save":"Edit"}</Button>
      <Button variant="danger" onClick={()=>dispatch(deleteTask(el.id))} >Delete</Button>
      </div>
      </div>
    </div>
  )
}



export default Task