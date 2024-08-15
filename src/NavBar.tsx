import React, { useState } from "react";

const NavBar = () => {
    return (
    <div className="navbar flex justify-between p-3 items-center bg-neutral-950">
        <div className="flex  items-center cursor-pointer" onClick={() => window.location.href = 'index.html'}>
            <img src="./logo192.png" alt="logo" className="app-logo m-0 w-20 h-20"/>
            <p className=" mr-2 font-sans font-bold text-white">SPACE BIN</p>
        </div>
        <div>
            <a href="#" className="mr-2 ml-2 text-white">Profile</a>
            <a href="#" className="mr-2 ml-2 text-white">About Us</a>
            <a href="#" className="mr-2 ml-2 text-white">Products</a>
        </div>
        <div>
            <button className="bg-white rounded-md">
                <p className="m-2 font-semibold">Try Premium</p>
            </button>
        </div>
    </div>
    )
}
export default NavBar