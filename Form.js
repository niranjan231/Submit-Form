import { useState } from 'react';
import './Form.css';

const Form =()=>{
const [email,SetEmail] = useState("");
const [firstName,SetFirstname] = useState("");
const [lastName,SetLastName] = useState("");



const onSubmit=(e)=>{
    e.preventDefault();
 const   user={
    email,firstName,lastName
 }
 console.log(user);
}


const onSubmitData=(e)=>{
    // if we not wright the name then we can not wrigth anything in input field so name properte is very complosory in this is a uniq key
    const fieldName = e.target.name;
    if(fieldName==="email")
        SetEmail(e.target.value);
    if(fieldName==="firstName")
        SetFirstname(e.target.value);
    if(fieldName==="lastName")
        SetLastName(e.target.value);
}


    return(
      
        
        <div className='form-1'>
            <form onSubmit={onSubmit} className='first-1'>
                <div>
 <label><h4>UserEmail:</h4></label><br></br>
 <input onChange={onSubmitData} value={email} name='email' type='email' placeholder='userEmail' ></input>
 </div>
 <br></br>
 <div>
 <label><h4>firstName:</h4></label><br></br>
 <input onChange={onSubmitData} value={firstName} name='firstName' type='text' placeholder='FirstName' ></input>
 </div>
 <br></br>
 <div>
 <label><h4>lastName:</h4></label><br></br>
 <input onChange={onSubmitData} value={lastName} name='lastname' type='text' placeholder='LastName' ></input>
 </div>
 <br></br>
 <div className='btn-1'>
    <input type='submit' ></input>
 </div>
 
            </form>
        </div>
    )
}
export default Form;