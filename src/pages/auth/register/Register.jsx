import { TextField, Button, Checkbox } from "@mui/material"
import "../register/style.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../../hooks/modules/auth"
const Register = () =>{
    const dispatch = useDispatch()
    const [account, setAccount] = useState({
        username: '',
        password: '',
        repassword: ''
    })

    const [user, setUser] = useState({
        name: '',
        age: 0,
        address: '',
        telephone: '',
        avatar: '',
        height: 0,
        longitude: 0.00000,
        latitude: 0.00000
    })

    function accountChangeHandle(e) {
        let {name, value} = e.target;
        setAccount((prev) => ({...prev, [name]: value}))
    }

    function userChangeHandle(e) {
        let{name, value} = e.target;
        setUser((prev) => ({...prev, [name] : value}))
    }

    function onRegisterSubmit() {
        if(account.password != account.repassword) alert('password doesn\'t matched!')
        else {
            let acc = {username: account.username, password: account.password}
            let usr = {...user, 
                age: Number.parseInt(user.age), 
                height: Number.parseInt(user.height),
                longitude: Number.parseFloat(user.longitude),
                latitude: Number.parseFloat(user.latitude)}
            dispatch(register(acc, usr))
    }
        
    }
    return (
        <>
            <div class="container">
                <div class = "subcontainer">
                    <div class = "form">
                        <div class = "title">
                            <h1>Register</h1>
                        </div>
                        <div class = "inner-form">
                            <div class = "login">
                                <div class = "inputField">
                                    <TextField name = 'username' value = {account.username} onChange={(e) => {accountChangeHandle(e)}} label="Username" style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField name = 'password' value = {account.password} onChange={(e) => {accountChangeHandle(e)}} label="Password" style={{width: "25em"}} variant="outlined" type="password"/>
                                </div>
                                <div class = "inputField">
                                    <TextField name = 'repassword' value = {account.repassword} onChange={(e) => {accountChangeHandle(e)}} label = "Retype password" style={{width: "25em"}} variant="outlined" type="password"/>
                                </div>
                            </div>
                            <div class='login'>
                                <div class = "inputField">
                                    <TextField label="Full name" name = 'name' value = {user.name} onChange={(e) => {userChangeHandle(e)}} style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="Age" name = 'age' value = {user.age} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="Address" name = 'address' value = {user.address} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="height" name = 'height' value = {user.height} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="telephone" name = 'telephone' value = {user.telephone} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="longitude" name = 'longitude' value = {user.longitude} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="latitude" name = 'latitude' value = {user.latitude} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                                <div class = "inputField">
                                    <TextField label="avatar" name = 'avatar' value = {user.avatar} onChange={(e) => {userChangeHandle(e)}}  style={{width: "25em"}} variant="outlined"/>
                                </div>
                            </div>  
                        </div>
                        <div class ="login">
                            <Checkbox checked={true} /> <text style={{fontSize : "11px"}}>By register our account, you are confirmed our privacy and conditions</text>
                            <div class = "login-button">
                                <Button onClick={onRegisterSubmit} style= {{width:"10em", height: "3em"}} color="success" variant="contained">SUBMIT</Button>
                            </div>   
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register