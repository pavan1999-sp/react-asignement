import React from 'react'
import Data from '../../components/data/data.component'
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
import Contact from '../../pages/contact/contact.component'
import About from '../about/about.component'
import MyStore from '../../components/store/store.component'
import SignIn from '../../components/signin/signin.component'

const HomePage = ()=>{
    let signinkey = sessionStorage.getItem('signKey')
    return(
        <Router>
        <div className='navBarDiv'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    
                    </ul>
            </nav>
        </div>
        <Switch>
        <Route exact path='/' component={Data}/>
        <Route path='/contact' component={Contact}/>
       
        <Route path='/about' component={About}/>      
         <Route path="/:id" component={MyStore} />
        </Switch>
    </Router> 
    )
}
export default HomePage