import Header from "../../component/Header/Header";
import RotatingWords from "../../component/RotatingWords/RotatingWords";
import RotatingWordsAlternate from "../../component/RotatingWordsAlternate/RotatingWordsAlternate";
import "./home.scss"


const Home = () => {

    return(
        <>
        <Header></Header>
        <section className='welcoming__section'>
            
            <RotatingWords />
     
      

        </section>
        <section className='first__section'>
        </section>
        <section className='second__section'>
        </section>
        </>
    )

}

export default Home;