import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon,CDBBox, CDBContainer } from 'cdbreact';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <CDBFooter className="shadow" id="Footer">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto bg-light py-4 flex-wrap"
        style = {{padding:"2rem"}}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="30px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">ULISES</span>
          </a>
          <p className="ml-2">&copy; Ulises, 2022. All rights reserved.</p>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;