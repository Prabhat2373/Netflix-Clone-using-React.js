import React from 'react'
import "./../Navbar.css"

export default function Navbar(props) {   
  return (
    <>
        <nav className="navbar" id="navbar">
            <div className="logoContainer">
                <img src={props.logo} alt="Netflix Logo" className="navLogo"/>
            </div>
            <div className="optContainer">
                <div className="selectCont">
                    <select name="selectLang" id="selectLang" >
                        <option selected value="/eng/">English</option>
                        <option value="/hi-in">Hindi</option>
                    </select>
                </div> 
                <div className="sign-in-cont">
                    <button className="sign-in" id="signin">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

