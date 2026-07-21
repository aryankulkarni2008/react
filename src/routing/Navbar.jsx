import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"



export default function Navbar(){
    return <BrowserRouter>
        <nav>
            <h1>Linkcode</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/service">Services</a></li>
            </ul>
        </nav>
        <Routes>
           <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/service" element={<Services />} />
        </Routes>
       
        </BrowserRouter>
}