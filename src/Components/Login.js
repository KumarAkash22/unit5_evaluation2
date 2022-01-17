import React, { useState } from "react";
import { useDispatch } from "react-redux";
import login from '../Store/action'
import './login.css'
const Login = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name:name,
            email: email,
            password: password,
            loggedIn: true,
        }))
    }

    return (
        <div className="login">
            <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                <h1 className="heading">Login App</h1>
                <input type="name"
                 placeholder="Enter your Name" 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}/>
                <input type="email"
                 placeholder="Enter your Email" 
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password"
                 placeholder=" Enter your Password" 
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}/>
                 <button type="submit" className="btn" >Submit</button>
            </form>
        </div>
    )
}
export default Login;