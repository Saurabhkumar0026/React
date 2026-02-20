
import {useState,createContext} from "react";
const UserLogin=createContext(); 
const LoginContext=({children})=>{
const [user,setUser]=useState({name:"",auth:false});
const login =(nm)=>{
    setUser({name:nm,auth:true})
}
const logout=()=>{
    setUser({name:"",auth:false});
}
    return(
        <>
        <UserLogin.Provider value={{login,logout,user}}>
         {children}
        </UserLogin.Provider>
        </>
    )
}
export default LoginContext;
export {UserLogin}