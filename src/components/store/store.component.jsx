import React from 'react'

class MyStore extends React.Component{
    render(){
        let data = this.props.location.state.x
        let city = this.props.location.state.city
      return(
          <div className='storeDiv'>
              <img src={data.imageUrl} alt=""/>
              <div className='storeContent'>
                  <h2 className='text text-danger'>{city}</h2>
                  <h5 className='text text-info' style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Restaurant Name : {data.title}</h5>
                  {
                      data.description.map(x=><div className='m-3 text text-info'>{x}</div>)
                  }
              </div>
          </div>
      )

}
}


export default MyStore