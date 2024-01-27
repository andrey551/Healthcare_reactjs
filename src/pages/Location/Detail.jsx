import { Alert, Avatar, Box, Button, Link, Modal, Rating, Snackbar, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import React, { useEffect, useState } from 'react'

import Comment from '../../components/comment/Comment';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, loadComment, loadDepartment } from '../../hooks/modules/location';
import { parseTime, roundFLoat } from '../../utils/utils';
import Scheduler from '../../components/scheduler/scheduler';


const style = {
    position: 'absolute',
    top: '50%',
    left: '160%',
    transform: 'translate(-50%, -50%)',
    width: '30em',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const LocationDetail = () => {
    const dispatch = useDispatch()
    const location = useSelector((state=> state.location.detail.location))
    const me = useSelector((state => state.user.user))
    const comments = useSelector((state => state.location.detail.comments))
    const list_Department = useSelector((state => state.location.detail.departments))
    const [openModal, setOpenModal] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false)

    useEffect(() => {
        dispatch(loadComment());
        dispatch(loadDepartment());
    }, [])
    console.log(list_Department)

    // modal
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    // Snack bar
    const handleOpenSnackBar = () => setOpenSnackBar(true)
    const handleCloseSnackBar = () => setOpenSnackBar(false)

    const [myComment, setMyComment] = useState('')
    const [rate, setRate] = useState(0);


    const confirmSchedule = () => {
        handleOpenSnackBar()
    }

    const sendComment = () => {
        dispatch(addComment({myComment, rate}))
    }

    return (
        <>
        <Snackbar
            open={openSnackBar}
            autoHideDuration={5000}
            onClose={handleCloseSnackBar}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Meeting scheduled
                </Alert>
            </Snackbar>
        <Box sx = {{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx = {{border: '2px green solid', width: '20em', height: '20em'}}>
                        <img src= {location.avatar} width={'320em'} height={'320em'}/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex',flexDirection: 'column', paddingLeft: '3em', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='h5'>{location.name}</Typography>
                        <Typography variant='subtitle2'>Address: {location.address}</Typography>
                        <Typography variant='subtitle2'>Open: {parseTime(location.open)}  - {parseTime(location.close)}</Typography>
                        {/* <Typography variant='subtitle2'>Telephone: {location.telephone}</Typography> */}
                        <Typography variant='subtitle2'>
                            Rating: {roundFLoat(location.rating)} ({location.passengers})
                        </Typography>
                        <Rating value={location.rating} size="small" readOnly/>
                    </Box>
                    <Box sx={{paddingBottom: '1em'}}>
                        <Button onClick={handleOpen}>
                            <Link underline='hover' >List of departments and schedule </Link>
                        </Button>
                        <Box >
                            <Modal 
                                open = {openModal}
                                onClose={handleClose}
                                sx={{width: '30em'}}
                            >
                                <Box sx={style}>
                                    <Typography variant='h5'>List department:</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {list_Department.map((value, index) => {
                                            return(
                                                <>
                                                    <Scheduler department = {value} hospital_id={location.id}/>
                                                </>
                                            )
                                        })}
                                    </LocalizationProvider>
                                    
                                </Box>
                            </Modal>
                            </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx= {{display: 'flex', flexDirection: 'column', paddingTop: '3em', paddingLeft: '2em'}}>     
                <Rating sx ={{marginLeft: '2em'}} value={rate} onChange={(e) => setRate(e.target.value)}/>
                <TextField variant='standard' 
                value={myComment}
                onChange={(e)=> {
                    setMyComment(e.target.value)
                }}  
                placeholder='write comment...'
                            InputProps={{
                                startAdornment:(
                                    <Avatar sx={{width: '1.8em', height: '1.8em',margin: '0.3em', marginBottom: '0.7em', marginRight: '0.5em'}} alt={me.username} src = {me.avatar}/>
                                ),
                                endAdornment: (
                                    <Button onClick={sendComment}>
                                        <SendIcon/>
                                    </Button>
                                    
                                )
                            }}
                            margin='none'
                            sx={{width: '40em'}}
                            />
                
            </Box>
            <Box sx = {{marginTop: '2em'}}>
                {
                    comments.map((comment, index) => {
                        return(
                            <>
                            <Box key ={index} sx = {{paddingLeft: '2em', paddingTop: '1em'}}>
                                <Comment data={comment}/>
                            </Box>
                            </>
                        )
                    })
                }
            </Box>
        </Box>
        </>
    )
}

export default LocationDetail