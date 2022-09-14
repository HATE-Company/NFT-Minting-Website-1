import NftCard from "../component/NftCard"
import "./home.scss"
import MenuPack from "../component/Menu/MenuPack"
import Tilt from "react-parallax-tilt"

const Home = () => {

  

    return(
        <>

        <div className="wrapper">
        <div className="menucontainer">

                    <MenuPack/>

                    </div>

        <div className="title"><span className="monolith">MONOLITH</span><span className="nft-pass">NFT-PASS</span></div>
        {document.documentElement.clientWidth >=1000 ?
        <>

        <section className="wrapper__firstsection__welcoming">
        <a href="#cards3" className="downarrow"></a>


            <div className="welcomingwrapper">
                <div className="welcomingnft">

            <img src={require("../assets/bronzewelcoming.png")}></img>
            
            <img className="bronzenfttext" src={require("../assets/bronzenft__text.png")}></img>

                </div>
                <div className="welcomingnft">


            <img src={require("../assets/silverwelcoming.png")}></img>
                <img src={require("../assets/silver_nft_text.png")}></img>
                </div>
<div className="welcomingnft">

            <img src={require("../assets/goldwelcoming.png")}></img>
                <img className="goldnfttext" src={require("../assets/gold_nft_text.png")}></img>
</div>
<div className="welcomingnft">

            <img src={require("../assets/blackwelcoming.png")}></img>
                <img className="blcknfttext" src={require("../assets/black_nft_text.png")}></img>
</div>


            </div>
            <a className="ctatext" href="#cards3">
            <img className="" src={require("../assets/buynow.png")}></img>
            </a>


          
        </section>
        <section id="cards3" className="wrapper__firstsection">
        <div className="title"><span className="monolith">MONOLITH</span><span className="nft-pass">NFT-PASS</span></div>
        <a href="#blackcard" className="downarrow"></a>

         <div className="menucontainer">
        <MenuPack/>

         </div>

            <div className="wrapper__3card">

                    <NftCard rgb="test" type="bronze" className="nftcard__regular bronze"/>
                    <NftCard rgb="test" type="silver" className="nftcard__regular silver"/>
                    <NftCard rgb="test" type="gold" className="nftcard__regular gold"/>

            </div>

        </section>



                <section id="blackcard" className="wrapper__secondsection">

                    <NftCard className="nftcard__black"/>
                    
                </section>

            </>
                :
                <>
        <section className="wrapper__firstsection__welcoming" id="welcome">

        <a href="#mobilebronze" className="downarrow"></a>

            <div className="welcomingwrapper">
                <div className="welcomingnft">

            <img src={require("../assets/bronzewelcoming.png")}></img>
            <img className="bronzenfttext textwelcome" src={require("../assets/bronzenft__text.png")}></img>

                </div>
                <div className="welcomingnft">


            <img src={require("../assets/silverwelcoming.png")}></img>
                <img className="silvernfttext textwelcome" src={require("../assets/silver_nft_text.png")}></img>
                </div>
<div className="welcomingnft">

            <img src={require("../assets/goldwelcoming.png")}></img>
                <img className="goldnfttext textwelcome" src={require("../assets/gold_nft_text.png")}></img>
</div>
<div className="welcomingnft">

            <img src={require("../assets/blackwelcoming.png")}></img>
                <img className="blcknfttext textwelcome" src={require("../assets/black_nft_text.png")}></img>
</div>


            </div>

            <a className="ctatext" href="#mobilebronze">
            <img className="" src={require("../assets/buynow.png")}></img>
            </a>

          
        </section>
                <section className="wrapper__firstsection" id="mobilebronze">
        <div className="title"><span className="monolith">MONOLITH</span><span className="nft-pass">NFT-PASS</span></div>

                <a href="#mobilesilver" className="downarrow"></a>
                    
                <NftCard que="left" className="nftcard__regular bronze"/>

                </section>

                <section className="wrapper__firstsection" id="mobilesilver">
        <div className="title"><span className="monolith">MONOLITH</span><span className="nft-pass">NFT-PASS</span></div>

                <a href="#mobilegold" className="downarrow"></a>

                <NftCard className="nftcard__regular silver"/>

                </section>

                <section id="mobilegold" className="wrapper__firstsection">
        <div className="title"><span className="monolith">MONOLITH</span><span className="nft-pass">NFT-PASS</span></div>

        <a href="#mobileblack" className="downarrow"></a>

                <NftCard className="nftcard__regular gold"/>
                                    
                </section>

                <section id="mobileblack" className="wrapper__secondsection">
<div className="totopbutton">
        <a href="#welcome" className="downarrow"></a>

</div>
                <NftCard className="nftcard__black"/>
                                    
                </section>
                </>
            
        }
        </div>
        </>
    )

}

export default Home