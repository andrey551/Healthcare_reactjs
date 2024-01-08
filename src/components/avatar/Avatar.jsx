import React from 'react'
import "../avatar/style.css"
const Avatar = ({src}) => {
    return (
        <>
            <div class = "avatar">
                <img id='image' src= {src}/>
            </div>
        </>
    )
}

export default Avatar