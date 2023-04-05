import React from 'react'
import { useState } from "react";
import ToDo from './Components/ToDo';
import AddTaskForm from './Components/AddTaskForm';
import UpdateForm from './Components/UpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {
 // faCircleCheck, faPen,faTrashCan
//} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
const [toDo, setToDo] = useState([


]);


const [newTask,setNewtask]=useState('');
const [updateData,setUpdateData]=useState('');

const addTask= () =>
{
if(newTask)
{
  let num = toDo.length + 1; 
  let newEntry = { id: num, title: newTask, status: false }
  setToDo([...toDo, newEntry])
  setNewtask('');
}
}

const deleteTask =(id)=>
{
  let newTasks = toDo.filter( task => task.id !== id)
  setToDo(newTasks);
}
const markDone =(id)=>
{
  let newTask = toDo.map( task => {
    if( task.id === id ) {
      return ({ ...task, status: !task.status })
    }
    return task;
  })
  setToDo(newTask);

}
const cancelUpdate =()=>
{
  setUpdateData('');
}
const changeTask =(e)=>
{
  let newEntry = {
    id: updateData.id,
    title: e.target.value,
    status: updateData.status ? true : false
  }
  setUpdateData(newEntry);
}
const updateTask=()=>
{
  let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
  let updatedObject = [...filterRecords, updateData]
  setToDo(updatedObject);
  setUpdateData('');
}

  return (
    <div classname="container App">
      <br /><br />
    <h2><center>Your Personalised To-Do List</center></h2>
    <br /><br />

      {updateData && updateData ?(
       
       <UpdateForm 
       updateData={updateData}
       changeTask={changeTask}
       updateTask={updateTask}
       cancelUpdate={cancelUpdate}
     />

      ):(
        
      
        <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewtask}
        addTask={addTask}
      />
    
        
      )
      }
       

      
      {toDo && toDo.length ? '':<center>NO TASK IS ADDED !!</center>}
      <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    >  </ToDo>

    </div>
  );
}

export default App

