import { useContext, useState } from "react";
import { UserLogin } from "./LoginContext";

const UnAuth=()=>{
    const [txtval,setTxtVal]=useState("");
    const{login}= useContext(UserLogin);
    return(
        <>
        <h1>Auth app</h1>
        Enter name: <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}} />
        <button onClick={()=>{login(txtval)}}>login</button>
        </>
    )
}
export default UnAuth;