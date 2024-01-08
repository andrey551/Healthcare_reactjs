import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Map, Panorama, SearchControl, YMaps } from '@pbe/react-yandex-maps';
import { Placemark } from '@pbe/react-yandex-maps';
import React, { useEffect, useState } from 'react';
import LocationCard from '../../components/location-card/LocationCard';


const YandexMap = () => {
    const [location, setLocation] = useState('Hospital');
    const [target, setTarget] = useState('Near By')

    const handleLocation = (event) => {
        setLocation(event.target.value);
    };

    const handleTarget = (event) =>{
        setTarget(event.target.value);
    }

    const data = [
        {
            type: 'hospital',
            name: "Поликлиника № 83",
            address: "Bolshoy Prospekt, 10, St Petersburg, 197198",
            open: '8:00',
            close: '21:00',
            Telephone: '88127700083',
            rating: 3.8,
            number_of_rating: 68
          },
          {
            type: 'hospital',
            name: "Городская поликлиника № 34",
            address: "Zverinskaya Ulitsa, 15, St Petersburg, 197198",
            open: '9:00',
            close: '20:00',
            Telephone: '88122467350',
            rating: 3.2,
            number_of_rating: 74
          },
          {
            type: 'hospital',
            name: "Поликлиника № 30, детское поликлиническое отделение № 14",
            address: "Malyy Prospekt P.s., 15, St Petersburg, 197110",
            open: '8:00',
            close: '20:00',
            Telephone: '88122467418',
            rating: 2.9,
            number_of_rating: 48
          },
          {
            type: 'hospital',
            name: "При Поликлинике № 83 Стоматологическое Отделение",
            address: "Bolshoy Prospekt, 8, St Petersburg, 197198",
            open: '8:00',
            close: '21:00',
            Telephone: '88127700083',
            rating: 3.8,
            number_of_rating: 68
          },
          {
            type: 'hospital',
            name: "Поликлиника № 83",
            address: "Bolshoy Prospekt, 10, St Petersburg, 197198",
            open: '8:00',
            close: '21:00',
            Telephone: '88122358285',
            rating: 5.0,
            number_of_rating: 0
          },
          {
            type: 'hospital',
            name: "Городская Поликлиника №3. Отделение врача",
            address: "Naberezhnaya Reki Smolenki, 3, St Petersburg, 199178",
            open: '8:00',
            close: '21:00',
            Telephone: '88123847420',
            rating: 3.0,
            number_of_rating: 8
          },
          {
            type: 'hospital',
            name: "СПб ГБУЗ «Городская поликлиника №3» ОВОП",
            address: "Naberezhnaya Reki Smolenki, 3, St Petersburg, 199178",
            open: '8:00',
            close: '20:00',
            Telephone: '88127700083',
            rating: 2.7,
            number_of_rating: 66
          }
    ]
    return(
        <>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx = {{border: '2px green dashed', width: '25em', height: '25em'}}>
                        <YMaps >
                            <Map width={'25em'} height={'25em'} defaultState={{center: [59.9, 30.7], zoom: 9}}>
                                <Placemark defaultGeometry={[59.9, 30.7]} />
                                <SearchControl options={{ float: "right" }} />
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
                                value={location}
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
                            <Button variant='contained'>Search</Button>
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