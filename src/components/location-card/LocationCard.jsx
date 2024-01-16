import { Box, Button, Card, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react'
import { parseTime, roundFLoat } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setDetail } from '../../hooks/modules/location';
const LocationCard = (prop) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onDetail = () => {
        dispatch(setDetail(prop.location))
        navigate('/detail')
    }

    return(
        <>
            <Card sx={{display:'flex', width: '42em', height: '13em', backgroundColor: '#a7f2c5', border: "2px black dashed"}}>
                <CardMedia
                    component={'img'}
                    sx={{height: '7em', width: '7em', paddingLeft: '1em', paddingTop: '2em'}}
                    image= {require("../../assets/" + prop.location.type +".png")} />
                <Box sx={{display: 'flex',flexDirection: 'row'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', paddingLeft: '1em', paddingTop: '0.5em'}}>
                        <Box sx= {{width: '25em'}}>
                            <Typography variant='h5'>{prop.location.name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle2' sx={{maxWidth: '25em'}}>Address: {prop.location.address}</Typography>
                            
                            <Typography variant='subtitle2'>Open: {parseTime(prop.location.open)}  - {parseTime(prop.location.close)}</Typography>
                            <Typography variant='subtitle2'>
                                Rating: {roundFLoat(prop.location.rating)} ({prop.location.passengers})
                            </Typography>
                            <Rating value={prop.location.rating} size="small" readOnly/>
                        </Box>
                    </Box>
                    <Box sx= {{display: 'flex',  alignItems: 'flex-end', paddingBottom: '1em'}}>
                        <Button sx={{display: 'flex', justifyContent: 'flex-end'}} onClick={onDetail} variant='contained'>Detail</Button>
                    </Box>
                </Box>

            </Card> 
        </>
    )
}

export default LocationCard;