import Auth from "./Auth";
import UnAuth from "./UnAuth";
import { useContext } from "react";
import { UserLogin } from "./LoginContext";
const App=()=>{
  const {user}= useContext(UserLogin);

  return(
    <>
    <h1> welcome to my app:</h1>

    {user.auth ?<Auth/>: <UnAuth/>}
    
    </>
  )
}
export default App;