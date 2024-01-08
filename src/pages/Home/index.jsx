import React from 'react'
import Header from '../../components/header/Header';
import Home from './Home';
import Footer from '../../components/footer/Footer';
import { Box } from '@mui/material';

const HomePage = () => {
    return(
        <>
        <Box>
            <Header/>
        </Box>
        <Box sx = {{paddingTop: '2em', paddingBottom: '2em'}}>
            <Home/>
        </Box>
        <Box>
            <Footer/>
        </Box>
        
        </>
    )
}

export default HomePage;