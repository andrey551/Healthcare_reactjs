import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import Conversation from '../../components/conversation/Conversation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {ConversationDetail, DoctorDetail} from './conversationDetail';
import {conversationsFake, doctor} from './data';

const conversations = conversationsFake;
const ChatBoard = () => {
    return(
        <>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{width: '25vw', height: '100vh'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', backgroundColor: '#e1f7f6',borderBottom: 'solid gray 1px', paddingBottom: '1.5em', paddingLeft: '1em', paddingTop: '1em', justifyContent: 'space-between'}}>
                    <Typography variant='h4'>Conversations</Typography>
                    <Button>
                    <AddCircleOutlineIcon sx={{width:'1.3em', height: '1.3em', display: 'flex', flexDirection: 'column', marginRight: '0.5em',color: 'green', justifyItems: 'center'}}/>
                    </Button>
                    
                </Box>
                <Box sx={{ marginTop: '1em', height:'83vh', paddingTop: '1em', overflow: 'scroll',overflowX: 'hidden'}}>
                    {conversations.map((value, index) => {
                        return(
                            <>
                            <Box key={index}>
                                <Conversation conversation={value}/>
                            </Box>
                            </>
                        )
                    })}
                </Box>
            </Box>
            <ConversationDetail conversation={conversations[0]}/>
            <Box>
                <DoctorDetail doctor={doctor}/>  
            </Box>
                 
        </Box>
        </>
    )
}


export default ChatBoard;