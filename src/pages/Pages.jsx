import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from './Error';
import Activities from './Activities';

function Pages(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/activities' element={<Activities/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}

export default Pages;