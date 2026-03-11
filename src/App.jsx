import { useDispatch, useSelector } from "react-redux";
import { addTask,recDel,taskComp,taskInComp } from "./colorSlice";
import { useState } from "react";

const App=()=>{
  const [txtval,seTxtVal]=useState("");
  const task=useSelector(state=>state.mycolor.task);
  const dispatch=useDispatch();

  let sno=0;
  const ans=task.map((key)=>{
    sno++;

  

  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>
        {key.complete ? (
          <>
          <span style={{color:'red',textDecoration:'line-through'}}>{key.work}</span>
          </>
        ):(
          <>
          {key.work}
          </>
        )}

      </td>
      <td>
        <button onClick={()=>{dispatch(recDel({id:key.id}))}}>Delete</button>
      </td>
      <td>
        <button onClick={()=>{dispatch(taskComp({id:key.id}))}}>Complete</button>

       
      </td>
      <td>
         <button onClick={()=>{dispatch(taskInComp({id:key.id}))}}>Incomplete</button>
      </td>
    </tr>
    </>)
  
})
return(
  <>
  <h1> to do App</h1>
  Enter Task: <input type="text" value={txtval} onChange={(e)=>{seTxtVal(e.target.value)}} />
  <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtval,complete:false}))}} >Add</button>
  <hr />
  <table>
    <tr>
      <th>SNO.</th>
      <th>Task</th>
      
    </tr>
    {ans}
  </table>
  </>
)
}

export default App;