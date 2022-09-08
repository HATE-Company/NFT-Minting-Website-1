import uniqueRandomArray from "unique-random-array"
import NftCard from "../components/Card/NftCard"
import { DATA } from "../data/NftData"

import "./home.scss"


const Home = () => {

{/* Arrays for generating background on every render */}

    const nftBgArr = [
        'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
        'linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%)',
        'linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)'
    ]



    const random = uniqueRandomArray(nftBgArr)

    return(

      <div className="wrapper">

    {/* Conditional rendering denepnds viewport*/ }

        {document.documentElement.clientWidth <=1000 ? DATA.map(data=>

            <section style={{ display:'flex', justifyContent:'center'}} >

                <NftCard publisher={data.publisher}  currency={data.currency} price={data.price}randomBg={random()} src={data.url} title={data.title} />

            </section>

        )   :
            <>

            <section>

                {DATA.slice(0,3).map(data => 

                    <NftCard publisher={data.publisher} currency={data.currency} price={data.price}randomBg={random()} src={data.url} title={data.title}/>

                    )}

            </section>

           { DATA.slice(3).map(data => 
            
            <section>

                <NftCard publisher={data.publisher} currency={data.currency} price={data.price}randomBg={random()} title={data.title} src={data.url}/>

            </section>
            
            )}

             </>

}
      </div>
    )

}


export default Home