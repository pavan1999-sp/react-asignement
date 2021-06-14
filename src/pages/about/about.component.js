
const About = ()=>{
    return(
        <div className='AboutPage'>
            <div  className='AboutDiv' style={{float:'left'}}>
            <h1 style={{color:"orange"}}>WE SERVE HERE</h1>
            <ul className='m-5'>
                <li className='m-3'><h6>Hyderabad</h6></li>
                <li className='m-3'><h6>Chennai</h6></li>
                <li className='m-3'><h6>Goa</h6></li>
                <li className='m-3'><h6>Coorg</h6></li>
                <li className='m-3'><h6>Mumbai</h6></li>
            </ul>
          
            </div>
            <div>
                <img src={"foodStores.jpg"} alt='' />
            </div>
        </div>
    )
}

export default About