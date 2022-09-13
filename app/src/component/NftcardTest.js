import Tilt from "react-parallax-tilt"
import { useState } from "react"


const NftcardTest = (props) => {
    let rgbState = 'rgb-test'
    
    if(props.className.includes('black')){
        rgbState = 'rgb2'
    }
    
    if(props.rgb=='test'){
        if(props.type=='bronze'){
            rgbState ='rgb-test-2'
        }
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
            
            <div className={props.cardshadow}></div>
            {props.className.includes('gold')? <div className="fligrangold"></div>:<div className="fligran"></div>}

        <div className={props.className +" "+props.rgb}>

        {/* Setting Card BG */}
        
            {props.className.includes('black')?

                <img alt="" className="bgcardblack"src={require("../assets/blackbg__desktop.png")}/>

                :

                <img alt="" className="bgimg"src={require("../assets/bronzenft__bg.png")}/>}

        {/* Bronze Card */}

            {props.className.includes('bronze')&& 
                <>

                <div className="buttonbronze" style={{
                boxShadow: '0 0 20px 2px #f4bf86'
            }} >
                    <h1>BRONZE 9$</h1>
                </div>

                <Tilt onMove={test} className="monolith__img__wrapper" tiltMaxAngleX="5" scale={1.1}>

                        <img alt="" className="monolith__img" src={require("../assets/bronzemonolith__desktop.png")}/>
                        <div style={{
                    boxShadow:`${shadowY}px ${(shadowX)}px 20px 30px #B026FF`
            }} className="monolithshadow"></div>

                </Tilt>
              

                </>
            }

        {/* Silver Card */}

            {props.className.includes('silver')&&

                <>
           

            <div className="buttonsilver" style={{
                boxShadow: '0 0 20px 2px rgba(204,250,242,1)'
                
            }}>
                <h1>SILVER 19$</h1>

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
                <div className="buttongold" style={{
                    boxShadow: '0 0 20px 2px #f5f68c'
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

export default NftcardTest;