import React, { useState } from 'react'
import { Alert, Avatar, Box, Button, Link, Modal, Rating, Snackbar, TextField, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useDispatch } from 'react-redux';
import { addSchedule } from '../../hooks/modules/location';
const Scheduler = ({department, hospital_id}) => {
    const dispatch = useDispatch()
    const [time, setTime] = useState(null)

    const confirmOnAction = () => {
        dispatch(addSchedule(time.format('YYYY-MM-DD HH:mm:ss.SSSSSS'), department.id, hospital_id));
        console.log(time.unix());

    }
    return (
        <>
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>{department.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box><Typography variant='h6'>Set schedule</Typography></Box>
                    <Box sx ={{display: 'flex', flexDirection: 'row'}}>
{/*                         
                            <Box sx={{padding: '1em'}}>
                                Time: <TimePicker value={time} onChange={(e) => {setTime(e)}}/>
                            </Box>
                            <Box sx={{padding: '1em'}}>
                                Date: <DatePicker value={date} onChange={(e) => {setDate(e)}}/>
                            </Box> */}
                            <Box sx={{padding: '1em'}}>
                                Date time: <DateTimePicker value={time} onChange={(e) => {setTime(e)}}/>
                            </Box>
                        
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <Button onClick={confirmOnAction}>Confirm</Button>
                        </Box>
                    
                    </Box>

                </AccordionDetails>
            </Accordion>
        </Box>
        </>
    )
}

export default Scheduler;