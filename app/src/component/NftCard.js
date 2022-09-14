import "./nftcard.scss"
import Tilt from "react-parallax-tilt"
import { useState } from "react"

const NftCard = (props) => {
let rgbState = 'rgb'

if(props.className.includes('black')){
    rgbState = 'rgb2'
}




const [shadowY, setShadowY] = useState("")

const [shadowX, setShadowX] = useState("")

const test = (e)=> {
    setShadowY(e.tiltAngleYPercentage<0?
        Math.abs(e.tiltAngleYPercentage)
        *0.1:-Math.abs(e.tiltAngleYPercentage)*0.1)

        setShadowX(e.tiltAngleXPercentage<0?
            -Math.abs(e.tiltAngleXPercentage)
            *0.1:Math.abs(e.tiltAngleXPercentage)*0.1)

}

const [isOpen, setIsOpen] = useState(false)

const handleIsOpen = () => {
  setIsOpen(!isOpen)
}

const closeSideBar = () => {
  setIsOpen(false)
}

    return(

        <div className="nftcard">
            
            <div className="fligran"></div>

            <div className={props.className +" "+rgbState}>

        {/* Setting Card BG */}
        
            {props.className.includes('black')?

                <img alt="" className="bgcardblack"src={require("../assets/blackbg__desktop.png")}/>

                :

                <img alt="" className="bgimg"src={require("../assets/bronzenft__bg.png")}/>}

        {/* Bronze Card */}

            {props.className.includes('bronze')&& 
                <>
                
                    <a href="https://www.metamask.io" target={"__blank"} className="buttonwrapper__bronze">

                        <h1>BRONZE &ensp;$9</h1>

                    <div className="buttonbronze" style={{
                        boxShadow:'0px 12px 15px -5px #f4bf86'
                    }} >
                        <div className="buttonbronze-gradient">

                            <div className="buttonbronze-gradient2"></div>

                        </div>

                    </div>

                    </a>

                    <Tilt onMove={test} className="monolith__img__wrapper" tiltMaxAngleX="5" scale={1.1}>

                        <img alt="" className="monolith__img" src={require("../assets/bronzemonolith__desktop.png")}/>

                        <div style={{
                        boxShadow:`${shadowY}px ${(shadowX)}px 20px 25px #e604ee`
                        }} className="monolithshadow-bronze"></div>

                    </Tilt>
              

                </>
            }

        {/* Silver Card */}

            {props.className.includes('silver')&&

                <>

                    <a href="https://www.metamask.io" target={"__blank"} className="buttonwrapper__silver">

                        <div className="buttonsilver" style={{
                        boxShadow: '0px 12px 15px -5px rgba(204,250,242,1)'
                        }}>

                            <div className="buttonbronze-gradient">
                            <div className="buttonbronze-gradient2">
                            </div>
                            </div>

                            <h1>SILVER &ensp;$29</h1>

                        </div>

                    </a>

                
                    <Tilt onMove={test} tiltMaxAngleX="5" className="monolith__img__wrapper" scale={1.1} >

                        <img  alt="" className="monolith__img__silver" src={require("../assets/silvermonolith__desktop.png")}/>
                        <div style={{
                        boxShadow:`${shadowY}px ${(shadowX)}px 20px 30px #e604ee`
                        }} className="monolithshadow-silver"></div>

                    </Tilt>


                </>
             }

        {/* Gold Card */}

            {props.className.includes('gold')&& 

                <>
                    <a href="https://www.metamask.io" target={"__blank"} className="buttonwrapper__gold">

                        <div className="buttongold" style={{
                        boxShadow: '0px 12px 15px -5px #f5f68c'
                        }}>

                            <div className="buttonbronze-gradient">
                            <div className="buttonbronze-gradient2">
                            </div>
                            </div>
                        
                            <h1>GOLD &ensp;$49</h1>

                        </div>

                    </a>

                    <Tilt onMove={test} tiltMaxAngleX="5" className="monolith__img__wrapper" scale={1.1}>

                        <img alt="" className="monolith__img" src={require("../assets/goldmonolith__desktop.png")}/>

                        <div style={{
                        boxShadow:`${shadowY}px ${(shadowX)}px 20px 30px #e604ee`
                        }} className="monolithshadow">
                        </div>
                        
                    </Tilt>

                </>
            }

        {/* Black Card */}

            {props.className.includes('black')&& 

                <>

                    <Tilt scale={1.1} tiltMaxAngleX="5" className="monolith__img__wrapper__black"> 

                        <img alt="" className="monolith__img__black" src={require("../assets/black__desktop.png")}/>

                        <div className="rgb"></div>

                    </Tilt>

                    <a href="https://www.metamask.io" target={"__blank"} className="blackbutton">

                        <h1>BLACK 399$</h1>

                    </a>

                    <div className="buttonbronze-gradient">

                        <div className="buttonbronze-gradient2">
                        </div>

                    </div>

                </>
            
            }

        </div>
        
        </div>
    )
    
}

export default NftCard