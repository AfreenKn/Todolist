import React,{ useState } from "react";

function Todo(){

const[tasks,setTask]=useState([]); 
const[newTask,setNewTask]=useState("");

function handleInputchanges(event){
setNewTask(event.target.value);
}
function addTask(){
   if(newTask.trim()!==""){
    setTask(t=>[...t,newTask]);
    setNewTask("");
   }
}
function deleteTask(index){
   const updateTasks=tasks.filter((__dirname,i)=>i!==index); 
   setTask(updateTasks);
}
function moveTaskUp(index){
   if(index>0){
    const updateTasks=[...tasks];
    //swap 
    [updateTasks[index],updateTasks[index -1]]=[updateTasks[index - 1],updateTasks[index]];
    setTask(updateTasks);

   }
}
function moveTaskDown(index){
    if(index<tasks.length-1){
        const updateTasks=[...tasks];
        //swap 
        [updateTasks[index],updateTasks[index+1]]=[updateTasks[index+1 ],updateTasks[index]];
        setTask(updateTasks);
    
       }
}
    return(<div className="to-do-list">
    <h1>TO-DO LIST</h1>
    <input type="text" placeholder="Enter the tasks " value={newTask} onChange={handleInputchanges}/>
    <button className="add-button" onClick={addTask}>Add</button>
    <ol>
    {tasks.map((task,index)=>
    <li key={index}>
        <span className="text">{task}</span>
        <button className="delete-button"onClick={()=> deleteTask(index)}>Delete</button>
        <button className="move-button" onClick={()=> moveTaskUp(index)}>UP</button>
        <button className="move-button" onClick={()=> moveTaskDown(index)}>Down</button>
    </li>
    )}
    </ol>
    </div>
    );
}
export default Todo