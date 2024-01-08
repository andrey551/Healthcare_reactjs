import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Typography,IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteRecord, deleteRecords } from '../../hooks/modules/records';

const Record = (props) => {
    const dispatch = useDispatch()
    function deleteItem() {
        dispatch(deleteRecord(props.user))
    }
    return(
        <>
            <Card sx = {{display: 'flex', width: '47em', height: '11em'}}>
                <CardMedia 
                component={"img"}
                sx={{height: '7em', width: '7em', paddingLeft: '1em', paddingTop: '1em'}}
                image= {require("../../assets/schedule.png")}/>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', paddingBottom: '0.5em'}}>
                        <CardContent sx={{flex: '1 0 auto'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Box>
                                    <Typography component={"div"} variant='h5' sx={{paddingTop: '0.2em'}}>
                                        Record {props.user.time.split(" ")[0]}
                                    </Typography>
                                </Box>
                                <Box sx= {{display: 'flex',paddingLeft: '2em', paddingBottom: '0em'}}>
                                    <IconButton onClick={deleteItem} aria-label="delete" color="primary">
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Typography variant='subtitle1' color={"text.secondary"} component={"div"}>
                                {props.user.time.split(" ")[1].slice(0, 5)}
                            </Typography>
                        </CardContent>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', paddingLeft: '1em'}}>
                                <Typography sx = {{paddingRight: '1em'}}> Height: {props.user.height}</Typography>
                                <Typography sx = {{paddingRight: '1em'}}> Weight: {props.user.weight}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'row', paddingLeft: '1em', paddingTop: '1em'}}>
                                <Typography sx = {{paddingRight: '1em'}}>Choresterol: {props.user.cholesterol}</Typography>
                                <Typography sx = {{paddingRight: '1em'}}>Blood pressure: {props.user.blood_pressure}</Typography>
                                <Typography sx = {{paddingRight: '1em'}}>Heart beat: {props.user.heart_beat}</Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex',  alignItems: 'flex-end', paddingLeft: '5em'}}>
                        <Button sx = {{display:'flex', justifyContent: 'flex-end'}} variant='text'>Read More...</Button>
                    </Box>
                </Box>

            </Card>
            
        </>
    )
}

export default Record