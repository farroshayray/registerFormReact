import React, { useState } from "react";
import logo from "./picture/logo192.png"
import facebookLogo from "./picture/facebook.png";
import instagramLogo from "./picture/instagram.png"
import linkedinLogo from "./picture/linkedin.png"
import twitterxLogo from "./picture/twitterx.png"

const FooterContainer = () => {
    return (
        <div className="footer-container flex justify-between bg-black">
            <div className="content-center ml-4">
                <img src={logo}alt="company-logo" className="footer-logo content-center w-20 h-18 mx-auto flex justify-center" />
                <p className="text-center mb-4 text-white">see our social media</p>
                <div className="flex text-center justify-center">
                    <img src={facebookLogo} alt="a" className="m-1 w-8 h-8"/>
                    <img src={instagramLogo} alt="b" className="m-1 w-8 h-8"/>
                    <img src={linkedinLogo} alt="c" className="m-1 w-8 h-8"/>
                    <img src={twitterxLogo} alt="d" className="m-1 w-8 h-8"/>
                </div>
            </div>
            <div className="content-center text-white">
                <p className="m-1">Developer</p>
                <p className="m-1">Architecture</p>
                <p className="m-1">Docs</p>
                <p className="m-1">About Us</p>
            </div>
            <div className="mr-6 content-center text-white my-10">
                <p className="m-1">Projects</p>
                <p className="m-1">Products</p>
                <p className="m-1">Company</p>
                <p className="m-1">Technology</p>
                <p className="m-1">Career</p>
                <p className="m-1">Address</p>
            </div>
        </div>
    )
}
export default FooterContainer