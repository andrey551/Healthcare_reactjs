import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import HomePage from "../pages/Home";
import { DetailPage, LocationPage } from "../pages/Location";
import ChatPage from "../pages/Chat";
import AccountPage from "../pages/Account";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/location",
        element: <LocationPage/>,
        children: [
            {
                path: "detail",
                element: <DetailPage />
            }
        ]
    },
    {
        path: "/chat",
        element: <ChatPage/>
    },
    {
        path: "/account",
        element: <AccountPage/>
    }
])

export default router;