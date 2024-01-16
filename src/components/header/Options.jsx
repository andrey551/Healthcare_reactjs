// import React from 'react'
import "../header/style.css"
import {useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

const Options = () => {
    const options = [
            {title: "Analysis", url : "/home"},
            {title: "Location", url: "/location"},
            // {title: "Chat", url : "/chat"},
            {title: "Account", url : "/account"}];
        
            const navigate = useNavigate();
    
    const redirectUrl = (e, url) => {
        console.log(url)
        navigate(url);
    }

    return(
        <>
            <div class = "options">
                {options.map((option, index) => {
                    return(
                        <div class = "option" key={index} >
                            <Button name = {option.url} onClick={(e) =>{
                                redirectUrl(e, option.url)
                            }}>
                                <h2 >{option.title}</h2>
                            </Button>
                            
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Options