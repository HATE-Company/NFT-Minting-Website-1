import { useState } from "react";
import Header from "../../component/Header/Header";
import RotatingWords from "../../component/RotatingWords/RotatingWords";
import RotatingWordsAlternate from "../../component/RotatingWordsAlternate/RotatingWordsAlternate";
import RotatingWordsAlternate2 from "../../component/RotatingWordsAlternate2/RotatingWordsAlternate2";
import "./home.scss"



const Home = () => {
    
    const [style, setStyle] = useState({
        display:'default'
    })

    setTimeout(()=>{
        setStyle({
            opacity:'0'
        })
    },4000)

    return(
        <>
        
        <div>

        {/* <section id='main' className='welcoming__section'>
            
            <RotatingWords />
     
        </section> */}

        {/* <section id='main' className='welcoming__section'>
            
            <RotatingWordsAlternate />
            
        </section> */}
        
        <section id='main' style={style} className='welcoming__section'>
            
            <RotatingWordsAlternate2 />
     
        </section>
        </div>

        <Header></Header>
        <section className='first__section'>

            <div className="monolith__welcoming">
                <div className="monolith__welcoming__item">
                <img className="monolith__welcoming__img" src={require("../../assets/monolith__renders__ps/BronzeFront.png")}/>
                <img className="monolith__welcoming__txt" src={require("../../assets/monolith__renders__ps/BronzeText.png")}/>
                </div>

                <div className="monolith__welcoming__item">
                <img className="monolith__welcoming__img" src={require("../../assets/monolith__renders__ps/SilverFront.png")}/>
                <img className="monolith__welcoming__txt" src={require("../../assets/monolith__renders__ps/SilverText.png")}/>

                </div>

                <div className="monolith__welcoming__item">
                <img className="monolith__welcoming__img" src={require("../../assets/monolith__renders__ps/GoldFront.png")}/>
                <img className="monolith__welcoming__txt" src={require("../../assets/monolith__renders__ps/GoldText.png")}/>

                </div>

                <div className="monolith__welcoming__item">
                <img className="monolith__welcoming__img" src={require("../../assets/monolith__renders__ps/BlackFront.png")}/>
                <img className="monolith__welcoming__txt" src={require("../../assets/monolith__renders__ps/BlackText.png")}/>

                </div>

            </div>


        </section>
        <section className='first__section'>

        <div className="monolith__welcoming2">
            <img src={require("../../assets/monolith__renders__ps/BronzeFrontV2.png")}/>
            <img src={require("../../assets/monolith__renders__ps/SilverFrontV2.png")}/>
            <img src={require("../../assets/monolith__renders__ps/GoldFrontV2.png")}/>
            <img src={require("../../assets/monolith__renders__ps/BlackFrontV2.png")}/>
        </div>


        </section>

        <section id='monolithnft' className='second__section'>

        </section>

        <section className='third__section'>

        </section>
        </>
    )

}

export default Home;