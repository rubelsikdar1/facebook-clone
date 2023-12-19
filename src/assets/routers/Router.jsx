import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from './../pages/Login/Login';
import Registation from "../components/RegesterPageComponents/Registation";
import MessengerMainLayout from "../pages/Messenger/MessengerMainLayout";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"",
                element:<MessengerMainLayout/>
            }
        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"singup",
        element: <Registation/>
    }
]);

export default routes