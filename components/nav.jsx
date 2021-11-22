import React, { useState } from "react";
import Link from "next/link"
import { CgMenuGridR } from '@react-icons/all-files/cg/CgMenuGridR'
import { CgClose } from '@react-icons/all-files/cg/CgClose'
// import  CloseMenu from "/x.svg";
// import  MenuIcon from "/menu.svg";
// import { Logo } from "/logo.svg";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link href="/"><b>EXAMPLE</b></Link>  
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#skill">LINK1</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">LINK2</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">LINK3</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <b><CgClose /></b> : <b><CgMenuGridR /></b>}
      </div>
    </div>
  );
};

export default Header;
