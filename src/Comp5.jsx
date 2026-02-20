import { useContext } from "react";
import{ MyContext } from "./App";
const Comp5=()=>{
    const user = useContext(MyContext);
    return(
        <>
        <h1>
            component 5 :{user}
        </h1>
        </>
    )

}
 export default Comp5; 