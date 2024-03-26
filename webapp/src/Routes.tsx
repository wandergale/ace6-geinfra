import {
    Route,
    BrowserRouter,
    Routes as RoutesContainer
} from "react-router-dom";

import Home from "./views/Home"
import Solicitations from "./views/Solicitations"


export default function Routes(){

    return(

        <BrowserRouter>
            <RoutesContainer>
                <Route path="/" element={<Home/>}/>
                <Route path="/solicitations" element={<Solicitations/>}/>
            </RoutesContainer>
        </BrowserRouter>
    )
}