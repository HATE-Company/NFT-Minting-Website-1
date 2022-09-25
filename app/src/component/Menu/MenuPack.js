import { useState } from "react"
import "./menu.scss"
import { slide as Menu } from "react-burger-menu"
import Hamburger from 'hamburger-react'
const MenuPack = (props) => {


  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const closeSideBar = () => {
    setIsOpen(false)
  }
 

    return(

        <div className="outercontainer">

          <div className="menuicon">

            <Hamburger toggled={isOpen} toggle={setIsOpen} />

          </div>

          <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
            <div className="menuheader">


              <img src={require("../../assets/hate.png")}></img>
              <h3 className='brandname'>Hate Company</h3>

              

            </div>


            <a className="menuitem" href="https://www.linktr.ee/hateverse" target={"_blank"}>Home<div className="menuitem__border"></div></a>
            
            <a className="menuitem" href="https://www.linktr.ee/hateverse" target={"_blank"}>Monolith NFT Pass<div className="menuitem__border"></div></a>
            <a className="menuitem" href="https://www.linktr.ee/hateverse" target={"_blank"}>Whitepaper<div className="menuitem__border"></div></a>
            <a className="menuitem" href="https://www.linktr.ee/hateverse" target={"_blank"}>Community<div className="menuitem__border"></div></a>
                   
            </Menu>

        </div>
    )

}

export default MenuPack;