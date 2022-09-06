import Tilt from "react-parallax-tilt"
import "./nftcard.scss"

const NftCard = () => {


    return(
        <Tilt style={{width: 'max-content', margin:'0 auto'}} glareBorderRadius='20px' glareEnable='true' glareMaxOpacity='0.5' glarePosition="all"  perspective='500' scale='1.1' tiltMaxAngleY="10" tiltMaxAngleX="10">

        <div className="nftcard">
                <h1> Hello, World !</h1>
        </div>

        </Tilt>
    )

}

export default NftCard;