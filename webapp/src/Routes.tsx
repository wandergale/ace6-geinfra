import {
    Route,
    BrowserRouter,
    Routes as RoutesContainer
} from "react-router-dom";

import Home from "./views/Home"
import Solicitations from "./views/Solicitations"
import Dashboard from "./views/Dashboard"


export default function Routes(){

    return(

        <BrowserRouter>
            <RoutesContainer>
                <Route path="/" element={<Home/>}/>
                <Route path="/solicitations" element={<Solicitations/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </RoutesContainer>
        </BrowserRouter>
    )
}