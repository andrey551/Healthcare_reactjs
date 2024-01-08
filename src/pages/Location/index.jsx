import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Box } from '@mui/material';
import YandexMap from './Map';
import LocationDetail from './Detail';

// const API_KEY = '08996e49-95b0-4812-baa0-2690ac8ec0e1'
const location = {
    type: 'hospital',
    name: "Поликлиника № 83",
    address: "Bolshoy Prospekt, 10, St Petersburg, 197198",
    open: '8:00',
    close: '21:00',
    telephone: '88127700083',
    rating: 3.8,
    number_of_rating: 68,
    src : "https://avatars.mds.yandex.net/get-altay/6200226/2a00000182d19f9920db70da8058fe2ddfe7/XXL_height"
  }
export const LocationPage = () => {
    return(
        <>
        <Box>
            <Header/>
        </Box>
        <Box sx= {{paddingLeft: '15em', paddingBottom: '1em'}}>
            <YandexMap/>
        </Box>
            
        <Box>
            <Footer/>
        </Box>
        </>
    )
}

export const DetailPage = () => {
    return(
        <>
        <Box>
            <Header/>
        </Box>
        <Box sx= {{paddingLeft: '25em', paddingBottom: '1em'}}>
            <LocationDetail location = {location}/>
        </Box>
        <Box>
            <Footer/>
        </Box>
        </>
    )
}
