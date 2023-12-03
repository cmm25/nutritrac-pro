import './footer.css'
import {FaGithub,FaDiscord} from 'react-icons'
function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Nutripro.</h2>
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
                    <li><FaGithub/></li>
                    <li><FaDiscord/></li>
                    <li>GUD STUFF</li>
                </ul>
            </div>
          </div>
    
        </div>
      </div>
    );
  }
  
export default Footer;