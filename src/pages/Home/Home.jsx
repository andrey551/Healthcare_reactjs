import { Box, Typography, Button, Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Avatar from '../../components/avatar/Avatar';
import Record from '../../components/record/Record';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../hooks/modules/user';
import { addRecords, getRecord, addRecord } from '../../hooks/modules/records';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
      },[])
    useEffect(() => {
        dispatch(getRecord())
      },[])
    const user = useSelector((state => state.user.user))

    const records = useSelector((state => state.records.records))
    const [newRecord, setNewRecord] = useState(false)
    function isAddRecord() {
        setNewRecord(true);
    } 

    function quitRecord(){
        setNewRecord(false);
    }

    const [recordAdd, setRecordAdd] = useState({height: null,
                                            weight: null,
                                            cholesterol: null,
                                            heart_beat: null,
                                            blood_pressure: null});
    const onChangeText = (e) => {
        setRecordAdd({
            ...recordAdd,
            [e.target.name] :  Number(e.target.value)
        })
    }

    const onSubmitButton = () => {
        console.log(recordAdd)
        dispatch(addRecords(recordAdd));

        dispatch(addRecord())
        console.log("records: " , records)
    }

    return (
        <>
            <Box sx = {{display: 'flex', flexDirection: 'row'}}>
                <Box sx = {{display: 'flex', flexDirection: 'row', minHeight: '27em', padding: '2em', maxHeight: '28em'}}>
                    <Box>
                        <Avatar src={user.avatar}/>
                    </Box>
                    <Box sx={{paddingLeft: '2em', display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant='h6'>
                                Name: {user.name}
                            </Typography>
                            <Typography variant='h6'>
                                Age: {user.age}
                            </Typography>
                            <Typography variant='h6'>
                                Height: {user.height} cm
                            </Typography>
                            <Typography variant='h6'>
                                Telephone: {user.telephone}
                            </Typography>
                            <Typography variant='h6'>
                                Address: {user.address}
                            </Typography>
                        </Box>
                        { 
                            newRecord === false ?
                                (<Box sx = {{display: 'flex', justifyContent: 'flex-end', bottom: 0}}>
                                    <Button onClick={isAddRecord} variant='contained'>New Record</Button>
                                </Box>) :
                                (<Box sx = {{ bottom: 0}}>
                                    <Box sx = {{display: 'flex', flexDirection: 'column'}}>
                                        <table>
                                            <tr>
                                                <td>                                            
                                                    <Typography variant='h6'>
                                                        Height: 
                                                    </Typography>
                                                </td>
                                                <td><Input value={recordAdd.height}  
                                                            onChange={onChangeText}
                                                            name='height'/> cm</td>
                                            </tr>
                                            <tr>
                                                <td>                                            
                                                    <Typography variant='h6'>
                                                    Weight: 
                                                    </Typography>
                                                </td>
                                                <td><Input value={recordAdd.weight}  
                                                            onChange={onChangeText}
                                                            name='weight'/> kg</td>
                                            </tr>
                                            <tr>
                                                <td>                                            
                                                    <Typography variant='h6'>
                                                    Cholesterol: 
                                                    </Typography>
                                                </td>
                                                <td><Input value={recordAdd.cholesterol}  
                                                            onChange={onChangeText}
                                                            name='cholesterol'/> mg/dl</td>
                                            </tr>
                                            <tr>
                                                <td>                                            
                                                    <Typography variant='h6'>
                                                    Heart beat: 
                                                    </Typography>
                                                </td>
                                                <td><Input value={recordAdd.heart_beat}  
                                                            onChange={onChangeText}
                                                            name='heart_beat'/> /min</td>
                                            </tr>
                                            <tr>
                                                <td>                                            
                                                    <Typography variant='h6'>
                                                    Blood pressure: 
                                                    </Typography>
                                                </td>
                                                <td><Input value={recordAdd.blood_pressure}  
                                                            onChange={onChangeText}
                                                            name='blood_pressure'/> mmHg</td>
                                            </tr>
                                        </table>
                                    </Box>
                                    <Box sx ={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '1em'}}>
                                        <Button onClick={quitRecord} variant='contained' color='error'>Quit</Button>
                                        <Button  variant='contained' onClick={onSubmitButton} color='success'>Analysis</Button>
                                    </Box>    
                                </Box>)
                        }

                    </Box>
                </Box>
                <Box>
                    {records.map((record, index) => {
                        return(
                            <Box key = {index} sx = {{paddingTop: '2em'}}>
                                <Record user={record}/>
                            </Box>   
                        )
                    })}
                </Box>
            </Box>
        </>
    )
}

export default Home;