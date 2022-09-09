import Tilt from "react-parallax-tilt"
import "./nftcard.scss"
const NftCard = (props) => {

    

    return(
        <>
        <Tilt className="nftcard" tiltMaxAngleX="10" style={{backgroundImage: `url(${props.src})`}} glareBorderRadius='20px' glareEnable={true}glareMaxOpacity='0.5' glarePosition="all"   scale='1.1'>

            

                <div className="nftcard__id">

                    <h1>{props.title}</h1>


                </div>

            <div className="nftcard__price">

                <h4>{props.currency.toUpperCase()}</h4>

            </div>



        </Tilt>
        </>
    )

}

export default NftCard;