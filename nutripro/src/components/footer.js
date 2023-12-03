import './footer.css'
function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Nutripro.</h2>
            </div>
            
            <div className="col">
              
              <ui className="list-unstyled">
                <li>DANK MEMES</li>
                <li>OTHER STUFF</li>
                <li>GUD STUFF</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>WELL ANOTHER COLUMN</h4>
              <ui className="list-unstyled">
                <li>DANK MEMES</li>
                <li>OTHER STUFF</li>
                <li>GUD STUFF</li>
              </ui>
            </div>
          </div>
    
        </div>
      </div>
    );
  }
  
export default Footer;