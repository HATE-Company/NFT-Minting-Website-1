import NftCard from "../components/Card/NftCard"
import "./home.scss"

const Home = () => {

    return(
      <div className="wrapper">
        <section>
        <NftCard></NftCard>
        <NftCard></NftCard>
        <NftCard></NftCard>
        </section>

            <section>
        <NftCard></NftCard>
            
            </section>

                <section>
        <NftCard></NftCard>
            
                </section>

                    <section>
        <NftCard></NftCard>
            
                    </section>

      </div>
    )

}


export default Home