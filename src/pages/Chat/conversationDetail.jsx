import { Avatar, Box, Button, Chip, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Message from '../../components/message/Message';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export const ConversationDetail = ({conversation}) => {
    let dotColor = conversation.state === 'active' ? 'success' : 'disabled'
    return(
        <>
        <Box sx={{width: '50vw', height: '100vh', border : '1px black solid', display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', height: '12vh', backgroundColor: '#e1f7f6', borderBottom: '1px gray solid'}}>
                <Box>
                    <Avatar src={conversation.avatar} sx= {{width: '3em', height: '3em', margin: '0.5em'}}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', paddingLeft: '0.3em', justifyContent: 'center'}}>
                    <Typography variant='h5'>{conversation.name}</Typography>
                    <Box sx= {{display: 'flex', flexDirection: 'row'}}>
                        <FiberManualRecordRoundedIcon color={dotColor} sx={{width: '0.8em', height: '0.8em'}}/>
                        <Typography variant='caption'>{conversation.state}</Typography>
                    </Box>
                    
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20em'}}>
                    <Button variant='contained' color='error'>End & Pay</Button>
                </Box>
            </Box>
            <Box sx={{overflow: 'scroll', overflowX: 'hidden',paddingBottom: '1em'}}>
                {conversation.messages.map((message, index) => {
                    return(
                        <>
                            <Box key={index}  >
                                <Message message={message}/>
                            </Box>
                       </>
                    )
                })}
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', height: '17vh', border: '1px gray solid', paddingTop: '0.5em'}}>
                <Box sx={{width:'12em', display: 'flex', flexDirection: 'row', marginRight: '0.5em'}}>
                    <Button>
                        <AddPhotoAlternateIcon/>
                    </Button>
                    <Button>
                        <VideoCallIcon/>
                    </Button>
                    <Button>
                        <GraphicEqIcon/>
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <TextField sx= {{width: '30em', overflow: 'auto'}}  size='small'/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1em'}}>
                    <Button>
                        <SendIcon color='success' sx={{width: '1.5em', height: '1.5em'}}/>
                    </Button>
                    
                </Box>
            </Box>
        </Box>
        </>
    )
}

export const DoctorDetail = ({doctor}) => {
    return(
        <>
            <Box sx={{height: '100vh', width: '23vw', display: 'flex', flexDirection: 'column'}}>
                <Box>
                    <img src={doctor.avatar} style={{width: '23vw', height: '23vw'}}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', padding: '1em', overflow: 'scroll', overflowX: 'hidden'}}>
                    <Typography variant='body2'><b>Full name:</b> {doctor.name}</Typography>
                    <Typography variant='body2'><b>Age:</b> {doctor.age}</Typography>
                    <Typography variant='body2'><b>Full name:</b> {doctor.name}</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{paddingTop: '5px', marginRight: '5px'}} variant='body2'><b>Departments: </b></Typography>
                        <Box sx={{overflow: 'auto'}}>
                            {doctor.department.map((value) =>{
                                return(
                                    <>
                                        <Chip size='small' sx={{margin: '3px'}} label={value}/>
                                    </>
                                )
                            })

                            }
                        </Box>
                    </Box>
                    <Box sx={{display:'flex', flexDirection: 'row'}}>
                        <Typography variant='body2'><b>Rating: </b> {doctor.rating}</Typography>
                        <Rating value={doctor.rating} readOnly size='small'/>
                    </Box>
                    
                    <Typography variant='body2'><b>Passengers: </b> {doctor.num_of_passenger}</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='body2'><b>Education: </b></Typography>
                        {doctor.education.map((value) =>{
                            return(
                                <>
                                <Box sx={{padding: '0.5em'}}>
                                    <Typography variant='body2'><b>- {value.institude}</b> ({value.from} - {value.to})</Typography>
                                    <Typography variant='body2'><b>Specilization: </b>{value.Specialization}</Typography>
                                </Box>
                                    
                                </>
                            )
                        })}
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='body2'><b>Prize: </b></Typography>
                        {doctor.prize.map((value) =>{
                            return(
                                <>
                                <Box sx={{padding: '0.5em'}}>
                                    <Typography variant='body2'><b> - </b>{value.name} ({value.year})</Typography>
                                </Box>   
                                </>
                            )
                        })}
                    </Box>
                    <Box>
                        <Typography variant='body2'><b>Price: </b> {doctor.price} rubles</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '1em', paddingBottom: '0.5em'}}>
                        <Button variant='outlined'>Start</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
