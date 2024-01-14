import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { GeolocationControl, Map, SearchControl, YMaps } from '@pbe/react-yandex-maps';
import { Placemark} from '@pbe/react-yandex-maps';
import React, { useEffect, useState } from 'react';
import LocationCard from '../../components/location-card/LocationCard';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../../hooks/modules/location';


const YandexMap = () => {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [target, setTarget] = useState('')

    const handleLocation = (event) => {
        setType(event.target.value);
    };

    const handleTarget = (event) =>{
        setTarget(event.target.value);
    }

    const filterOnSubmit = () => {
        dispatch(getLocation({type, target}));
    }

    const [hintVisible, setHintVisible] = useState(false);
    const [hintContent, setHintContent] = useState('');
  
    const handleMouseEnter = (content) => {
      setHintContent(content);
      setHintVisible(true);
    };
  
    const handleMouseLeave = () => {
      setHintVisible(false);
    };

    const data = useSelector((state => state.location.locations))
    return(
        <>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx = {{border: '2px green dashed', width: '25em', height: '25em'}}>
                        <YMaps >
                            <Map width={'25em'} height={'25em'} defaultState={{center: [59.9, 30.7], zoom: 9}}>
                                {data.map(loc => {
                                    return (
                                        <Placemark 
                                        geometry={[loc.longitude, loc.latitude]} 
                                        />
                                    )
                                })}
                                
                                <SearchControl options={{ float: "right" }} />
                                
                                <GeolocationControl options={{ float: "left" }} events={{onclick : (e) => {console.log(e.originalEvent.map.getCenter())}}}  />
                            </Map>
                        </YMaps>
                    </Box>
                    <Box sx = {{paddingTop: '1em'}}>
                        <Typography variant='h5'>Search your location</Typography>
                        <Box>
                            <Typography variant='h6'>Choose location:</Typography>
                            <FormControl fullWidth>
                                <InputLabel>Location</InputLabel>
                                <Select
                                value={type}
                                label='Location'
                                onChange={handleLocation}
                                >
                                    <MenuItem value= {'Hospital'}>Hospital</MenuItem>
                                    <MenuItem value={'Drug Store'}>Drug Store</MenuItem>
                                </Select>

                            </FormControl>
                        </Box>

                        <Box sx ={{paddingTop: '0.5em'}}>
                            <Typography variant='h6'>Choose target:</Typography>
                            <FormControl fullWidth>
                                <InputLabel>Target</InputLabel>
                                <Select
                                value={target}
                                label='Target'
                                onChange={handleTarget}
                                >
                                    <MenuItem value= {'Near By'}>Near By</MenuItem>
                                    <MenuItem value={'Visited'}>Visited</MenuItem>
                                </Select>

                            </FormControl>
                        </Box>
                        <Box sx= {{display: 'flex', justifyContent: 'end', paddingTop: '1em'}}>
                            <Button onClick={filterOnSubmit} variant='contained'>Search</Button>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', paddingLeft: '5em'}}>
                    <Box>
                        <Typography variant='h5'>List Result:</Typography>
                    </Box>
                    <Box>
                        {data.map((value, index) => {
                            return(
                                <Box key={index} sx={{paddingTop: '1em'}}>
                                    <LocationCard location={value} />
                                </Box>
                            )
                        })}
                    </Box>
                </Box>

            </Box>

        </>
    )
};

export default YandexMap;