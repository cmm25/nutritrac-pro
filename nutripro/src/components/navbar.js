import "./nav.css";
import {Link} from 'react-scroll';

function NavBar(){
    return(
        <header className="nav">
            <div className="logo" id="top">Nutripro</div>
            <ul className="nav-menu">
                <li><a>Home</a></li>
                <li><Link  to="section1" 
                spy={true} 
                smooth={true} 
                offset={10} 
                duration={500} >Spotlight</Link>  </li>
            </ul>
        </header>
    )
    

}
export default NavBar