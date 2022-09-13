import { useState } from "react"
import "./menu.scss"
import { fallDown as Menu } from "react-burger-menu"
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
        <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
<h1>MENU</h1>
<a href="https://www.linktr.ee/hateverse" target={"_blank"}>WHITE PAPER</a>
                   

            </Menu>
      </div>
    )

}

export default MenuPack;