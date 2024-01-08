import { Box } from '@mui/material';
import React from 'react'
import { MessageBox } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css'
const Message = ({message}) => {
    
    return(
        <>  
            <Box>
                <MessageBox
                    
                    position={message.from === 'Me' ? 'right': 'left'}
                    type={'text'}
                    title={message.from}
                    text={message.content}
                    date={Date.parse(message.time)}/>
            </Box>
        </>

    )
}

export default Message;