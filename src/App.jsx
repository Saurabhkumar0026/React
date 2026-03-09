import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./colorSlice";
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
      <td>{key.work}</td>
    </tr>
    </>)
  
})
return(
  <>
  <h1> to do App</h1>
  Enter Task: <input type="text" value={txtval} onChange={(e)=>{seTxtVal(e.target.value)}} />
  <button onClick={()=>{dispatch(addTask({work:txtval}))}} >Add</button>
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