import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate=useNavigate();
    const loadData = async () => {
        let api = "http://localhost:5001/Data";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();

    }, [])
    const myDel = async (id) => {
        let api = `http://localhost:5001/Data/${id}`;
        const response = await axios.delete(api);
        alert("data deleted");
        loadData();
    }
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td>
                        <button onClick={()=>{navigate(`/myedit/${key.id}`)}}>Edit</button>
                    </td>
                    <td>
                        <button onClick={() => { myDel(key.id) }}>Delete</button>
                    </td>

                </tr>
            </>
        )

    })
    return (
        <>
            <h1>Update Data</h1>
            <hr />
            <table border='1'>
                <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
                {ans}
            </table>
        </>
    )


}
export default Update;