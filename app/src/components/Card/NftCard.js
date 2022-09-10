import { useState } from "react"
import Tilt from "react-parallax-tilt"
import "./nftcard.scss"
const NftCard = (props) => {

    const bgData = {
    BRONZE :'#883525',
    SILVER:'#075861',
    GOLD:'#4B121B',
    BLACK:'#253545'}

    const btnBg = {
        BRONZE :'#D7916F',
        SILVER:'#A8BABE',
        GOLD:'#FEEA82',
        BLACK:'#09585F'
    }


    //glareColor="#EAB3B1 100%, white 100%, #63514D 100%, #EFCEC8 20%, #6D88A1 20%"
    //glareColor=" #C6FCDF 0%,
    // #FACBE6 1%,
    // #9AECEF 100%,
    // red 100%,
    // #C45D59 20%,
    // #B9C2FC 100%,
    // #B9C2FC 100%,
    // #444645 100%
    // "
console.log(props.title.slice(0,6).replaceAll(" ",""))
    return(

        <Tilt className="nftcard" tiltMaxAngleX="10" tiltMaxAngleY="30" glareEnable={true}  glareMaxOpacity='0.1' glarePosition="all"    scale='1.1' style={{
            background: props.title== 'BLACK' ?'linear-gradient(90deg, rgba(38,50,48,1) 0%, rgba(1,0,1,1) 100%)' : props.title!== 'BRONZE'?bgData[props.title.slice(0,6).replaceAll(" ","")]:"",
            }} >

            <div className="nftcard__rgb">

            </div>

            <div className="nftcard__inner" >
            <Tilt  className="nftcard__img" glareEnable={true} tiltMaxAngleX="1" tiltMaxAngleY="1" glareMaxOpacity='0.3' glareBorderRadius="20px" glarePosition="all"  glareColor="
            #FACBE6 1%,
            #C45D59 50%,
            #B9C2FC 100%,
            #B9C2FC 100%,
            #444645 100%,
            red 1890%
            ">
                <img src={props.src} style={{boxShadow: '0px 0px 50px 10px'+btnBg[props.title.slice(0,6).replaceAll(" ","")]}} />
                <div className="nftcard__id" style={{
                    borderRadius:props.title=="GOLD" && '0px',
                    boxShadow: props.title.includes("BLACK")?"none": props.title==="GOLD"? "inset 0px 0px 24px 9px rgba(0,0,0,0.75)":'0px 15px 20px'+btnBg[props.title.slice(0,6).replaceAll(" ","")], 
                    background: props.title.includes("BLACK") ?'linear-gradient(-90deg, rgba(38,50,48,1) 0%, rgba(1,0,1,1) 100%)':props.title==="SILVER"?"#0C565C": props.title=="GOLD"?"none":"linear-gradient(94deg, rgba(255,255,255,1) 0%, rgba(254,230,202,1) 0%, rgba(226,240,226,1) 50%, rgba(203,250,248,1) 100%)"}}>

                {props.title!=='BLACK'&&<h1>{props.title+" "+props.price}</h1>}
                {props.title ==='BLACK'&&<><h1>{props.title}</h1> <h2 style={{
                    position: 'absolute',
                    top: '75px',
                    right: '-45px'
                }}>{props.price}</h2></>}




        </div>
            </Tilt>
         
              

         

            </div>
            {/* <div className="nftcard__price">

<h4>{props.currency.toUpperCase()}</h4>

</div> */}



        </Tilt>

    )

}

export default NftCard;