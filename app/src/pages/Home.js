import NftCard from "../component/NftCard"
import "./home.scss"
const Home = () => {

    return(
        <div className="wrapper">

        {document.documentElement.clientWidth >=1000 ?
        <>
        <section className="wrapper__firstsection">

            <div className="wrapper__3card">

                    <NftCard className="nftcard__regular bronze"/>
                    <NftCard className="nftcard__regular silver"/>
                    <NftCard className="nftcard__regular gold"/>

            </div>

        </section>


                <section className="wrapper__secondsection">

                    <NftCard className="nftcard__black"/>
                    
                </section>

            </>
                :
                <>
                <section className="wrapper__firstsection">
                    
                <NftCard que="left" className="nftcard__regular bronze"/>

                </section>

                <section className="wrapper__firstsection">

                <NftCard className="nftcard__regular silver"/>

                </section>

                <section className="wrapper__firstsection">

                <NftCard className="nftcard__regular gold"/>
                                    
                </section>

                <section className="wrapper__secondsection">

                <NftCard className="nftcard__black"/>
                                    
                </section>
                </>
            
            }
        </div>
    )

}

export default Home