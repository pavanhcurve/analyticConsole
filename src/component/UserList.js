import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Userlist()
{ 
    const [userData, setUserData]= useState([]);
    const [message, setMessage]= useState('');
   
    useEffect( ()=>{   
    getUserData();
    },[]);

 const getUserData= async()=>{
    const reqData= await fetch("http://localhost/reactcrudphp/API/user.php");
    const resData= await reqData.json();           
    setUserData(resData);
     } 

 const handleDelete= async(id)=>{
   const res= await axios.delete("http://localhost/reactcrudphp/API/user.php/"+id);
   setMessage(res.data.success);
   getUserData();   
 }

       return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-4">User's List</h5> 
                        <p className="text-danger">{ message} </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                 userData.map((uData, index)=>(
                                  <tr key={index}>
                                <td>{ uData.username}</td>
                                <td>{uData.email}</td>
                                <td>{ uData.status==1 ? "Active":"Inactive"} </td>
                                <td>
                                 <Link to={"/edituser/"+uData.id} className="mx-2"><img src="https://s.hcurvecdn.com/test/icon/edit.webp" width="20px" height="20px" id="editic"/></Link>
                                 <button style={{ background: "transparent", border: "none" }} className="mx-2" onClick={ ()=>handleDelete(uData.id)}><img src="https://s.hcurvecdn.com/test/icon/delete.webp" width="20px" height="20px"/></button>
                                 <button style={{ background: "transparent", border: "none" }} className="mx-2"><img src="https://s.hcurvecdn.com/test/icon/suspended.webp" width="20px" height="20px"/></button>
                                 <button style={{ background: "transparent", border: "none" }} className="mx-2"><img src="https://s.hcurvecdn.com/test/icon/email.webp" width="20px" height="20px"/></button>
                                 
                                </td>
                                </tr>
                                ))
                                }                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Userlist;