
import { useState } from "react";
import MenuPack from "../Menu/MenuPack";
import "./header.scss"


const Header = (props) => {

const [style, setStyle] = useState({
    display:'default'
})

if(props.hide===true){
    setStyle({
        display:'none'
    })
}
   
    return(
        <div className='header' style={style}>

            <div className='header__left'>

                <a href="#main">
                <img src={require("../../assets/hate.png")} />
                </a>
                
                {/* <h1>Hate Club</h1> */}

            </div>

            <div className='header__middle'>

                <img src={require("../../assets/NFTPASS-welcoming.png")}/>

            </div>
            <div className='header__right'>
                <div className="header__right__menu">

                <MenuPack></MenuPack>
                </div>
               
            </div>

        </div>
    )

}


export default Header;