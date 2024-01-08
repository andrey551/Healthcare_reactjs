import React from 'react'
import "../header/style.css"
import Logo from './Logo'
import Options from './Options'

const Header = () => {
    return(
        <>
        <div class = "header-container">
            <div>
                <Logo/>
            </div>
            <div>
                <Options/>
            </div>
        </div>

        </>
    )
}

export default Header