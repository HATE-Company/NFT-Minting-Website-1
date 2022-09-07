import Tilt from "react-parallax-tilt"
import "./nftcard.scss"
const NftCard = (props) => {

    
    return(

        <Tilt className="nftcard" style={{backgroundImage: props.randomBg}} glareBorderRadius='20px' glareEnable={true}glareMaxOpacity='0.5' glarePosition="all"   scale='1.1'>

                <div className="nftcard__img">

                    <img src={props.src}/>

                </div>

                <div className="nftcard__id">

                    <h1>{props.title}</h1>

                    <p>This line will be the description of NFT</p>

                </div>

            <div className="nftcard__price">

                <h4>{props.price.toFixed(2)+" "+props.currency.toUpperCase()}</h4>

            </div>

            <div className="nftcard__publisher">

                <h3>{props.publisher}</h3>
                
            </div>

        </Tilt>
    )

}

export default NftCard;