import { Link } from "react-router-dom";




const Header = () => {
    return ( 
        <>
            <div>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>

                    </ul>
                </nav>
            </div>
        
        </>
     );
}
 
export default Header;