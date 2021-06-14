import { connect } from "react-redux";

import {withRouter} from 'react-router-dom'

export const Resturents = ({cityresturents,getStoreData,history,match})=>{
    let city = cityFoodStores.city
   if(cityresturents.length===0){
    return(
        <div className='resturents'>
            <h5 className='text text-success'>We are available in the below cities</h5>
            <div className='citiesImageDiv'>
                <img src={'Hyderabad.jpg'} alt=''/>
                <img src={'Mumbai.jpg'} alt=''/>
                <img src={'Goa.png'} alt=''/>
                <img src={'Coorg.png'} alt=''/>
                <img src={'Chennai.png'} alt=''/>
            </div>
        </div>
    )
   }
   else{
       let storeData = cityresturents.foodPlaces.map((x)=>{
           return <section key={x.id} className="myStoresDiv" onClick={()=>{
            history.push(`${match.url}${x.title}`,{
              x,
              city
            })
        }
           }>
                        <img src={process.env.PUBLIC_URL + `/${x.imageUrl}`} alt={x.title} />
                        <div className='contentDiv'>
                            <h2 className='text text-danger'>{x.title}</h2>
                            <h6 className='m-3 text text-dark'>Prices : <b>{x.LowPrice}-{x.HighPrice}</b></h6>
                        </div>
                    </section>
       })
    return(
        <div>
            <h3 className='text text-primary'>{city} resturents</h3>
            {storeData}
        </div>
    )
   }
    
}

const getStores = (store)=>{
    return {cityresturents:store.getCityStores.store}
}


export default connect(getStores,null)(withRouter(Resturents))
