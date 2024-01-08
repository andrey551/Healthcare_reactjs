import { TextField, Button, Checkbox } from "@mui/material"
import "../register/style.css"
const Register = () =>{
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
                            <h1>Register</h1>
                        </div>

                        <div class = "login">
                            <div class = "inputField">
                                <TextField label="Username" style={{width: "25em"}} variant="outlined"/>
                            </div>
                            <div class = "inputField">
                                <TextField label="Email" style={{width: "25em"}} variant="outlined"/>
                            </div>
                            <div class = "inputField">
                                <TextField label="Password" style={{width: "25em"}} variant="outlined" type="password"/>
                            </div>
                            <div class = "inputField">
                                <TextField label = "Retype password" style={{width: "25em"}} variant="outlined" type="password"/>
                            </div>
                        </div>

                        <div>
                            <Checkbox checked={true} /> <text style={{fontSize : "11px"}}>By register our account, you are confirmed our privacy and conditions</text>
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

export default Register