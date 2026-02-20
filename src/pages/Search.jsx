import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const[rno,setRno]=useState("");
    const [mydata,setMydata]=useState([]);
    const handleSubmit = async()=>{
        let api =`http://localhost:5001/Data/?rollno=${rno}`;
        const response =await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    const ans= mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>

            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Search Data</h1>
        Enter Rollno:<input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>
        <hr />
        <table>
            <tr>
               <th>Rollno</th>
               <th>Name</th>
               <th>City</th>
               <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Search;