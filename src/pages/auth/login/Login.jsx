import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from "@mui/material";
import "../login/style.css"
import "../../../assets/logo.png"
import { useState } from "react";
import {login} from "../../../hooks/modules/auth";
import { Navigate } from "react-router-dom";

const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLoginSubmit = () => {
        dispatch(login(username, password))
    }

    const {serverErrorMessage} = useSelector(state => state.auth)
    const {loggedUser} = useSelector(state =>state.auth)

    if(loggedUser){
        return <Navigate replace to ="/home" />
    } else {
        return (
            <>
                <div class="container">
                    <div class = "subcontainer">
                        <div class = "logo">
                            <img src={require("../../../assets/logo.png")} height={"300em"}/>
                        </div>
                    </div>
                    <div class = "subcontainer">
                        <div class = "form">
                            <div class = "title">
                                <h1>Login</h1>
                                <text style={{color: 'red'}}>{serverErrorMessage}</text>
                            </div>

                            <div class = "login">
                                <div class = "inputField">
                                    <TextField 
                                    value={username} 
                                    onChange={e=>setUsername(e.target.value)} 
                                    label="Username" 
                                    style={{width: "25em"}} 
                                    variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField 
                                    label="Password"                                
                                    value={password} 
                                    onChange={e=>setPassword(e.target.value)}  
                                    style={{width: "25em"}} 
                                    variant="outlined" 
                                    type="password"/>
                                </div>
                            </div>

                            <div>
                                <div class = "login-button">
                                    <Button onClick={handleLoginSubmit} style= {{width:"10em", height: "3em"}} color="success" variant="contained">LOGIN</Button>
                                </div>
                                <div class = "forgot-account">
                                    <text class = "link">Forgot Username/Password?</text>
                                </div>         
                            </div>
                        </div>
                        <div class = "create-account">
                            <div class = "link">Create your account</div>
                        </div>
                    </div>


                </div>
            </>
        )
    }
} 

export default Login;