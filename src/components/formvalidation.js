import React from 'react'
import './form.css'

import { useState,useEffect } from 'react'

const Formvalidation = () => {
    const initialvalues = {username:'',email:'',password:''}
    const [formValues,setFormValues]= useState(initialvalues)
    const [formErrors,setFormErrors]= useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const changeHandler=(e)=>{
        const {name,value}= e.target;
        setFormValues({...formValues, [name]:value});
        
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true);
    }
    useEffect(()=>{
        
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues)
        }
    },[formErrors])
    const validate = (values)=>{
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;
        if(!values.username){
            errors.username= "Username is required"
        }
        if(!values.email){
            errors.email= "email is required"
        }
        else if(!regex.test(values.email)){
            errors.email = "Not an valid email format"
        }
        if(!values.password){
            errors.password= "password is required"
        }
        else if(values.password.length<6){
            errors.password="password must be more than 6 characters"
        }
        else if(values.password.length>10){
            errors.password="password cannot exceed more than 10 characters"
        }
        return errors;
    }
  return (
    <div className='container'>
    {Object.keys(formErrors).length===0 && isSubmit ? (
        <div className='message'>Signed in Successfully!</div>
    ):(<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}
        
      <form onSubmit={submitHandler}>
        <h1>Login Form</h1>
        
            <div className='field'>
                <label><h4>Username</h4></label>
                <input type='text' name='username' placeholder='Username' 
                value={formValues.username} onChange={changeHandler}/>
            </div>
            <p>{formErrors.username}</p>
            <div className='field'>
                <label><h4>Email</h4></label>
                <input type='email' name='email' placeholder='Email' 
                value={formValues.email} onChange={changeHandler}/>
            </div>
            <p>{formErrors.email}</p>
            <div className='field'>
                <label><h4>Password</h4></label>
                <input type='password' name='password' placeholder='Password' 
                value={formValues.password} onChange={changeHandler}/>
            </div>
            <p>{formErrors.password}</p>
            <button className='btn btn-success text-center' type='submit'>Submit</button>
        
      </form>
    </div>
  )
}

export default Formvalidation
