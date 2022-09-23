import Hamburger from "hamburger-react";
import { useState } from "react";
import MenuPack from "../Menu/MenuPack";
import "./header.scss"


const Header = () => {


   
    return(
        <div className='header'>

            <div className='header__left'>

                <img src={require("../../assets/hate.png")} />

            </div>

            <div className='header__middle'>

                <img src={require("../../assets/monolithnftpasstext.png")}/>

            </div>
            <div className='header__right'>
                <div className="header__right__menu">

               
                </div>
            </div>

        </div>
    )

}


export default Header;