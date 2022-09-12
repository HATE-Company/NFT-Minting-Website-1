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

    return(

        <div className="nftcard">

        <div className={props.className +" "+rgbState}>

        {/* Setting Card BG */}
        
            {props.className.includes('black')?

                <img alt="" className="bgcardblack"src={require("../assets/blackbg__desktop.png")}/>

                :

                <img alt="" className="bgimg"src={require("../assets/bronzenft__bg.png")}/>}

        {/* Bronze Card */}

            {props.className.includes('bronze')&& 
                <>

                <div className="button" style={{
                boxShadow: '0px 12px 15px -5px #f4bf86'
            }} >
                    <h1>BRONZE 9$</h1>
                </div>

                <Tilt onMove={test} className="monolith__img__wrapper" tiltMaxAngleX="5" scale={1.1}>

                        <img alt="" className="monolith__img" src={require("../assets/bronzemonolith__desktop.png")}/>
                        <div style={{
                    boxShadow:`${shadowY}px ${(shadowX)}px 20px 30px #f4bf86`
            }} className="monolithshadow"></div>

                </Tilt>
              

                </>
            }

        {/* Silver Card */}

            {props.className.includes('silver')&&

                <>

            <div className="button" style={{
                boxShadow: '0px 12px 15px -5px rgba(204,250,242,1)'
            }}>
                <h1>SILVER 4$</h1>

            </div>

                
                <Tilt onMove={test} tiltMaxAngleX="5" className="monolith__img__wrapper" scale={1.1} >

                <img  alt="" className="monolith__img__silver" src={require("../assets/silvermonolith__desktop.png")}/>
                <div style={{
                    boxShadow:`${shadowY}px ${(shadowX)}px 20px 30px rgba(204,250,242,1)`
            }} className="monolithshadow"></div>
                </Tilt>


                </>
             }

        {/* Gold Card */}

            {props.className.includes('gold')&& 

                <>
                <div className="button" style={{
                    boxShadow: '0px 12px 15px -5px #f5f68c'
                }}>
                    <h1>GOLD 49$</h1>

                </div>

                <Tilt onMove={test} tiltMaxAngleX="5" className="monolith__img__wrapper" scale={1.1}>

                <img alt="" className="monolith__img" src={require("../assets/goldmonolith__desktop.png")}/>

                <div style={{
                    boxShadow:`${shadowY}px ${(shadowX)}px 20px 30px #f5f68c`
            }} className="monolithshadow">
                </div>
                </Tilt>

                </>
            }

        {/* Black Card */}

            {props.className.includes('black')&& 

                <>


                <Tilt tiltMaxAngleX="5" className="monolith__img__wrapper__black"> 

                <img alt="" className="monolith__img__black" src={require("../assets/black__desktop.png")}/>

                <div className="rgb2"></div>

                </Tilt>
                <div className="blackbutton">
                    <h1>BLACK 399$</h1>
                </div>

                </>
            
            }

           
        </div>

        </div>
    )
    
}

export default NftCard