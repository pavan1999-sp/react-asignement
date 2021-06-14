export const getCityStores = (data)=>{
    return {
        type:"GET-CITY_DATA",
        payload : data.target.value
    }
 }