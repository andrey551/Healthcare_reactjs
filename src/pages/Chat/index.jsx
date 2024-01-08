import { Box } from "@mui/material"
import Header from "../../components/header/Header"
import ChatBoard from "./chatboard"
import Footer from "../../components/footer/Footer"

const ChatPage = () => {
    return(
        <>  
            <Header/>
            <Box>
                <ChatBoard />
            </Box>
            <Box>
                <Footer/>
            </Box>
        </>
    )
}

export default ChatPage;