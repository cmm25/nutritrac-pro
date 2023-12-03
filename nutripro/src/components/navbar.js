import "./nav.css";

function NavBar(){
    return(
        <header className="nav">
            <div className="logo">Nutripro</div>
            <ul className="nav-menu">
                <li>home</li>
                <li>recipe</li>
                <li>communities</li>
            </ul>
        </header>
    )
    

}
export default NavBar