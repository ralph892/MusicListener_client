import React from "react";
import { RiAppStoreFill, RiGooglePlayFill } from "react-icons/ri";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_info">
          <a href="#">info@listenapp.com</a>
        </div>
        <div className="footer_btn_wrapper">
          <button className="footer_btn">
            <RiGooglePlayFill className="footer_btn_icon" />
            Google Play
          </button>
          <button className="footer_btn">
            <RiAppStoreFill className="footer_btn_icon" />
            App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
