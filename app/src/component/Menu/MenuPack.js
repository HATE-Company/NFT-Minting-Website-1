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

            <h1>MENU</h1>

            <a href="https://www.linktr.ee/hateverse" target={"_blank"}>WHITE PAPER</a>
                   
            </Menu>

        </div>
    )

}

export default MenuPack;