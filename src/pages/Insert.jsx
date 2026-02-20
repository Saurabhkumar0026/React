import { useState } from "react";
import axios from "axios";

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=async()=>{
        let api="http://localhost:5001/Data";
        const response=await axios.post(api,input);
        console.log(response);
        alert("Data successfully save");
    }

    return(
        <>
        <h1>Insert Data</h1>
        Enter name:<input type="text" name="name" on onChange={handleInput}/>
        <br/>
        Enter rollno:<input type="text" name="rollno" on onChange={handleInput}/>
        <br/>
        Enter city:<input type="text" name="city" on onChange={handleInput}/>
        <br/>
        Enter age:<input type="text" name="age" on onChange={handleInput}/>       
        <br/>
        <button onClick={handleSubmit}>Save!!</button>
            
        </>
    )
}
export default Insert;