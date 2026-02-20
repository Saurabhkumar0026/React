import { useContext } from "react";
import { UserContext } from "./App";
const Cybrom=()=>{
    const user = useContext(UserContext);
  return(
    <>
    <h1>welcome to cybrom:{user}</h1>
    </>
  )
}
export default Cybrom;