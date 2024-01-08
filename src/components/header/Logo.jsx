import React from 'react'
import "../header/style.css"

const Logo = () => {
    return(
        <div class = "logo">
                <img width={"100em"} onClick={function (){ 
                    window.location.href = "https://se.ifmo.ru/"
                    }} 
                    href='https://se.ifmo.ru/' 
                    src={require("../../assets/Healthcare.png")} />
        </div>
    )
}

export default Logo;