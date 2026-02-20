import { useState,createContext } from "react";
const UserContext=createContext();
const MyContext=()=>{
    const [name,setName]=useState("sk");
    return(
        <>
         <UnserContext.provider value={{name,setName}}>
            {children}
         </UnserContext.provider>
        </>
    )
}
export default MyContext;
export {UnserContext};