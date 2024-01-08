import { Alert, Avatar, Box, Button, Link, Modal, Rating, Snackbar, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comment from '../../components/comment/Comment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const me = {
    avatar : 'https://sun9-3.userapi.com/impf/hguceg8bkWIVxo4f0ZZ7tdTVPapAB8YqKgl4DA/3PXGvrKLt9Y.jpg?size=972x2160&quality=95&sign=5013903ead30125fcd2e27b35fb036b0&type=album',
    username: 'Dau Cong Tuan Anh'
}

const comments = [
    {
        avatar : 'https://lh3.googleusercontent.com/a-/ALV-UjX6B1J-6lMlRiZzj4Gmmwf5V8TTuri7KRlt-Cl_DHDlow=w45-h45-p-rp-mo-br100',
        username : 'Аркадий Вязовиков',
        rated: 5,
        time: '15:02',
        long : '2 year ago',
        date: '01/03/2021',
        content: 'Хорошая поликлиника. Попал без проблем и к офтальмологу, и к отоларингологу, сдал кровь – всё быстро, без очередей. Врачи и медсестры были профессиональны и дружелюбны. Спасибо!'
    },
    {
        avatar : 'https://lh3.googleusercontent.com/a-/ALV-UjWZ6gSFUJeDB8jLCMlWstA8Lk1wlWiBCT7r7ikAXMbjuPP-=w45-h45-p-rp-mo-br100',
        username : 'Ирина Смирнова',
        rated: 1,
        time: '11:01',
        long : '1 year ago',
        date: '09/04/2022',
        content: 'Сегодня прождала 31 минуту, была в очереди 9, ждала пока оператор возьмет трубку. Говорю, что хочу записаться к Ляковой, и оператор говорит, что теперь нельзя записаться к своему врачу, так как вышло постановление такое.'
    },
    {
        avatar : 'https://lh3.googleusercontent.com/a-/ALV-UjXp6P32z82X5HHfOnjeg2Q_hWX5PISivUTIoQIwM0h2JaHK=w45-h45-p-rp-mo-br100',
        username : 'Nastya Forsilova',
        rated: 1,
        time: '13:21',
        long : 'January',
        date: '02/01/2023',
        content: 'Вакцинация от ковид-19 организована очень плохо. Сегодня мы были записаны на 9.25, пришли вовремя и обнаружили в кабинете 109, где проводится вакцинация, огромную толпу. '
    }
]

const list_Department = [
    'Gynecology',
    'Anesthesiology Department',
    'Cardiology',
    'General Surgery',
    'Emergency Department',
    'Critical Care'

]

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
const LocationDetail = ({location}) => {
    const [openModal, setOpenModal] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false)

    // modal
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    // Snack bar
    const handleOpenSnackBar = () => setOpenSnackBar(true)
    const handleCloseSnackBar = () => setOpenSnackBar(false)



    const confirmSchedule = () => {
        handleOpenSnackBar()
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
                        <img src= {location.src} width={'320em'} height={'320em'}/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex',flexDirection: 'column', paddingLeft: '3em', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='h5'>{location.name}</Typography>
                        <Typography variant='subtitle2'>Address: {location.address}</Typography>
                        <Typography variant='subtitle2'>Open: {location.open} AM  - {location.close} PM</Typography>
                        <Typography variant='subtitle2'>Telephone: {location.telephone}</Typography>
                        <Typography variant='subtitle2'>
                            Rating: {location.rating} ({location.number_of_rating})
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
                                                <Box key={index}>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon/>}
                                                    >
                                                        <Typography>{value}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Box><Typography variant='h6'>Set schedule</Typography></Box>
                                                        <Box sx ={{display: 'flex', flexDirection: 'row'}}>
                                                            
                                                                <Box sx={{padding: '1em'}}>
                                                                    Time: <TimePicker/>
                                                                </Box>
                                                                <Box sx={{padding: '1em'}}>
                                                                    Date: <DatePicker/>
                                                                </Box>
                                                            
                                                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                                                <Button onClick={confirmSchedule}>Confirm</Button>
                                                            </Box>
                                                        
                                                        </Box>

                                                    </AccordionDetails>
                                                </Accordion>
                                                </Box>
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
            <Box sx= {{display: 'flex', flexDirection: 'row', paddingTop: '3em', paddingLeft: '2em'}}>     
                <TextField variant='standard' 
                placeholder='write comment...'
                            InputProps={{
                                startAdornment:(
                                    <Avatar sx={{width: '1.8em', height: '1.8em',margin: '0.3em', marginBottom: '0.7em', marginRight: '0.5em'}} alt={me.username} src = {me.avatar}/>
                                ),
                                endAdornment: (
                                    <Button>
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