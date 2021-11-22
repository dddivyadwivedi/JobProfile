import React from 'react'
import {Link} from 'react-router-dom'
import {NavStyle , Ul , Li} from './StyleNav'

function Nav() {
    return (
        <NavStyle>
        <Ul>
          
        <Link to="/"><Li>Home</Li></Link> 
        <Link to="/shortlisted"><Li>Shortlisted</Li></Link> 
        <Link to="/rejected"><Li>Rejected</Li></Link>
      </Ul>
      </NavStyle>
       
    )
}

export default Nav
