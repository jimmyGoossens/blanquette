import { Link } from "react-router-dom";
import { MenuBar } from "../styles/OutStyles";

function NavMenu() {
    return (
        <MenuBar>
            <img 
                width="100px" 
                src="/media/logoBlanquette.jpg"
                style={{borderRadius:'50px'}}
                />
      <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">gallery</Link>
      </nav>
      </MenuBar>

    );
  }
  
  export default NavMenu;