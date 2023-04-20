
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Work
          </NavLink>
          <NavLink to="/play" activeStyle>
            Play
          </NavLink>
          <NavLink to="/resume" activeStyle>
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;