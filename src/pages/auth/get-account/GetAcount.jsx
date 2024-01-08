import React from "react";
import { TextField, Button } from "@mui/material";
import "../get-account/style.css"
const GetAccount = () => {
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
                            <h1>Reset account</h1>
                        </div>

                        <div class = "login">
                            <div class = "inputField">
                                <TextField label="Email" style={{width: "25em"}} variant="outlined"/>
                            </div>
                            <div class = "inputField">
                                <TextField label="New password" style={{width: "25em"}} variant="outlined" type="password"/>
                            </div>
                        </div>

                        <div>
                            <div class = "login-button">
                                <Button style= {{width:"10em", height: "3em"}} color="success" variant="contained">SUBMIT</Button>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetAccount