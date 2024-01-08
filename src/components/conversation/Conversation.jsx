import { Box, Avatar, Typography, Chip, Button } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        content: '""',
      },
    }
  }));

const Conversation = ({conversation}) => {
    let content = conversation.last_from + ": " + conversation.last_message
    if(content.length > 37 ) content = content.slice(0, 34) + '...';

    return(
        <>
        <Box sx={{width: '25vw', height: '15vh', display: 'flex', flexDirection: 'row'}}>
            
            <Box sx ={{width: 'max-content', marginLeft: '1em'}}>
                {
                    conversation.state === 'active' ?
                    <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    >
                        <Avatar src={conversation.avatar} sx={{width: '2.5em', height: '2.5em'}}/>
                    </StyledBadge>: 
                    <Avatar src={conversation.avatar} sx={{width: '2.5em', height: '2.5em'}}/>

                }
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '0.5em'}} >
                <Box sx= {{display: 'flex', flexDirection: 'row'}}>
                    <Typography variant='subtitle2'>{conversation.name}</Typography>
                    <Chip sx={{marginLeft: '1em'}} label={conversation.department} size='small' color='success'/>
                </Box>
                <Box>
                    <Box sx= {{ maxWidth: '20em'}}>
                        
                        <Typography variant='body2'>{content}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row',width: '18vw', marginTop: '1em', justifyContent: 'flex-end'}}>
                    <Typography variant='caption'>{conversation.last_time}</Typography>
                </Box>
            </Box>
            
        </Box>
        </>
    )
}

export default Conversation;