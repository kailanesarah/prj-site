import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import PageNotFound from "../Pages/PageNotFound";
import PageLayout from "../PagesLayout/PageLayout";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>} >
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>

                    </Route>

                    <Route path="*" element={<PageNotFound/>}  />
                </Routes>
            </BrowserRouter>
        
        
        </>
     );
}
 
export default Paths;
