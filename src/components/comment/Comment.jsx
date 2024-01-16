import React from 'react'
import { Avatar, Box, Rating, Typography } from '@mui/material';
import { distanceTime } from '../../utils/utils';
const Comment = ({data}) => {
    return(
        <>
        <Box sx= {{display : 'flex', flexDirection: 'row'}}>
            <Avatar src = {data.avatar}/>
            <Box sx = {{display: 'flex', flexDirection: 'column', marginLeft: '0.7em'}}>
                <Typography variant='subtitle2'>{data.name}</Typography>
                <Rating value={data.rate} size="small" readOnly/> 
                <Typography variant='body2' sx = {{width: '40em'}}>{data.content}</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end'}}>
                    <Typography variant='caption'>{distanceTime(data.time)}</Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Comment;