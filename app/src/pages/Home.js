import NftCard from "../component/NftCard"
import "./home.scss"
import MenuPack from "../component/Menu/MenuPack"

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
            <img src={require("../assets/bronzewelcoming.png")}></img>

            <img src={require("../assets/silverwelcoming.png")}></img>

            <img src={require("../assets/goldwelcoming.png")}></img>
            <img src={require("../assets/blackwelcoming.png")}></img>


            </div>
            <h1 className="ctatext">BUY NOW</h1>

          
        </section>
        <section id="cards3" className="wrapper__firstsection">
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
        <section className="wrapper__firstsection__welcoming">
         <a herf="#mobilebronze" className="downarrow"></a>
         <div className="menucontainer">

        <MenuPack/>
         </div>
            <div className="welcomingwrapper">
            <img src={require("../assets/bronzewelcoming.png")}></img>
            <img src={require("../assets/silverwelcoming.png")}></img>
            <img src={require("../assets/goldwelcoming.png")}></img>
            <img src={require("../assets/blackwelcoming.png")}></img>


            </div>
            <h1 className="ctatext">BUY NOW</h1>

          
        </section>
                <section className="wrapper__firstsection" id="mobilebronze">
                <a href="#mobilesilver" className="downarrow"></a>
                    
                <NftCard que="left" className="nftcard__regular bronze"/>

                </section>

                <section className="wrapper__firstsection" id="mobilesilver">
                <a href="#mobilegold" className="downarrow"></a>

                <NftCard className="nftcard__regular silver"/>

                </section>

                <section id="mobilegold" className="wrapper__firstsection">
                <a href="#mobileblack" className="downarrow"></a>

                <NftCard className="nftcard__regular gold"/>
                                    
                </section>

                <section id="mobileblack" className="wrapper__secondsection">

                <NftCard className="nftcard__black"/>
                                    
                </section>
                </>
            
        }
        </div>
        </>
    )

}

export default Home