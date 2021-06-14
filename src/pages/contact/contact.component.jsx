import './ContactPage.component.css'
const Contact = ()=>{
    return(
        <div className='ContactPage'>
            <div className='ContactContent text text-primary  m-3'>
                <h2>Contact Us</h2>   
                <p style={{marginTop:"80px"}}><b>resturents@india.com</b></p> 
                <p><b>9666660005</b></p> 
                <p><b>040-8851247</b></p> 
            </div>
            <img src={'Ottimo Cucina Italiana.jpg'} alt=''/>
        </div>
    )
}

export default Contact