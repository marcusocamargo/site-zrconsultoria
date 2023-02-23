import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
import LogoImg from "../img/LogoZrSemFundo.png";



function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink exact to="/">Home</NavbarLink>
            <NavbarLink to="/Empresa.js">Empresa</NavbarLink>
            <NavbarLink to="/Contato.js">Contato</NavbarLink>
            <NavbarLink as='a' target='_blank' href="https://www.comprecar.com.br/lojas/zr-negocios-automotivos">Estoque</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended exact to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="./Empresa.js">Empresa</NavbarLinkExtended>
          <NavbarLinkExtended to="./Contato.js">Contato</NavbarLinkExtended>
          <NavbarLinkExtended as='a' target='_blank' href="https://www.comprecar.com.br/lojas/zr-negocios-automotivos">Estoque</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;