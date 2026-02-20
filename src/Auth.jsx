import {useContext} from "react";
import { UserLogin } from "./LoginContext";

const Auth=()=>{
    const {user,logout}=useContext(UserLogin);
    return(
        <>
        <h1>auth app</h1>
        <h2>welcome {user.name}</h2>
        <button onClick={logout}>logout</button>
        </>
    )
}
export default Auth;