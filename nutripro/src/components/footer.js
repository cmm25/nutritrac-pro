import './footer.css'
import {Link} from 'react-scroll';
function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2><Link  to="top" 
              spy={true} 
              smooth={true} 
              offset={-10} 
              duration={500} >Nutripro.</Link></h2>
            </div>
            
            <div className="col">
              <ul className="participants">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            <div className="col-3">
                <ul className="social-media">
                    <li><ion-icon name="logo-github"></ion-icon></li>
                    <li><ion-icon name="logo-discord"></ion-icon></li>
                    <li><ion-icon name="logo-linkedin"></ion-icon></li>
                </ul>
            </div>
          </div>
    
        </div>
      </div>
    );
  }
  
export default Footer;