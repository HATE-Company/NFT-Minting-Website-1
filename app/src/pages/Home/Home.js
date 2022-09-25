import Header from "../../component/Header/Header";
import RotatingWords from "../../component/RotatingWords/RotatingWords";
import RotatingWordsAlternate from "../../component/RotatingWordsAlternate/RotatingWordsAlternate";
import RotatingWordsAlternate2 from "../../component/RotatingWordsAlternate2/RotatingWordsAlternate2";
import "./home.scss"


const Home = () => {

    return(
        <>
        <Header></Header>
        <section id='main' className='welcoming__section'>
            
            <RotatingWords />
     
        </section>

        {/* <section id='main' className='welcoming__section'>
            
            <RotatingWordsAlternate />
     
        </section> */}
        
        <section id='main' className='welcoming__section'>
            
            <RotatingWordsAlternate2></RotatingWordsAlternate2>
     
        </section>

        <section className='first__section'>

        </section>

        <section id='monolithnft' className='second__section'>

        </section>

        <section className='third__section'>

        </section>
        </>
    )

}

export default Home;