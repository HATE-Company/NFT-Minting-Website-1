import "./nftcard.scss"
import Tilt from "react-parallax-tilt"
const NftCard = (props) => {
let rgbState = 'rgb'
if(props.className.includes('black')){
    rgbState = 'rgb2'
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

                <Tilt  className="monolith__img__wrapper" tiltMaxAngleX="5">
                        <img alt="" className="monolith__img" src={require("../assets/bronzemonolith__desktop.png")}/>
                </Tilt>

                <div className="bronzeshadow"></div>

                <img alt="" className="button" src={require("../assets/bronzebutton.png")} />


                </>
            }

        {/* Silver Card */}

            {props.className.includes('silver')&&
                <>

                <img alt="" className="button" src={require("../assets/silverbutton.png")} />

                <Tilt tiltMaxAngleX="5" className="monolith__img__wrapper">

                <img alt="" className="monolith__img__silver" src={require("../assets/silvermonolith__desktop.png")}/>

                </Tilt>

                <div className="silvershadow"></div>

                </>
             }

        {/* Gold Card */}

            {props.className.includes('gold')&& 

                <>

                <img alt="" className="button" src={require("../assets/goldbutton.png")} />

                <Tilt tiltMaxAngleX="5" className="monolith__img__wrapper">

                <img alt="" className="monolith__img" src={require("../assets/goldmonolith__desktop.png")}/>

                </Tilt>

                <div className="goldshadow"></div>

                </>
            }

        {/* Black Card */}

            {props.className.includes('black')&& 
                <>

                <img alt="" className="blackbutton"src={require("../assets/blackbutton.png")}/>

                <Tilt tiltMaxAngleX="5" className="monolith__img__wrapper__black"> 

                <img alt="" className="monolith__img__black" src={require("../assets/black__desktop.png")}/>

                <div className="rgb2"></div>

                </Tilt>

                </>
            
            }

           
        </div>

        </div>
    )
    
}

export default NftCard