import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";
import axios from "axios";
const MyEdit =()=>{
    const[mydata,setMydata]=useState({});
    const{id}=useParams();
    const loadData=async()=>{
        let api=`http://localhost:5001/Data/${id}`;
        const response =await axios.get(api);
        console.log(response.data);
        setMydata(response.data) ;
    }
    useEffect(()=>{
        loadData();
    },[]);
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
        console.log(mydata);
    }

    const handleSubmit=async()=>{
        let api=`http://localhost:5001/Data/${id}`;
        const response=await axios.put(api,mydata);
        alert("Data updated");
    }
    return (
        <>
        <h1>Edit page:{id}</h1>
        Enter rollno: <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
        <br />
        Enter Name: <input type="text" name="name" value={mydata.name} onChange={handleInput} />
        <br />
        Enter City: <input type="text" name="city" value={mydata.city} onChange={handleInput} />
        <br />
        Enter Fees: <input type="text" name="fees" value={mydata.fees} onChange={handleInput} />
        <br />
        <button onClick={handleSubmit}>Update</button>

        </>
    )
}
export default MyEdit;