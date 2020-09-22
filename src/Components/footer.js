import React, { Component } from 'react'

class Footer extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div style={{backgroundColor:`black`,color:`white`,marginLeft:'200px',marginRight:'200px',marginTop:'100px'}}> 
            <div style={{display:`inline-block`,marginLeft:`100px`,float:"left"}}>
                <h3>Address </h3>
                <p>18/2 Tootpara EastLink Road,Khulna</p>
                <h3>Github</h3>
                <a style={{textDecoration:'none'}} href="https://github.com/shrestho10">
                <p style={{color:`white`}}>www.github.com/shrestho10</p>
                </a>
            </div>
            <div className="foot" style={{display:`inline-block`,marginLeft:'100px',color:`white`}}>
                <ul style={{color:`white`}}>
                   <li>
                <h3>LinkedIn</h3>
                <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/shagoto-rahman-656996188/">
                <p>www.linkedin.com/shagotorahman</p></a>
                </li>
                
                
               <li>
               <h3>Facebook</h3> <a style={{textDecoration:'none'}} href="https://www.facebook.com/roakstar.shrestho">
                <p>www.facebook.com/shagotorahman</p></a>
                </li>
                
                <li>
                <h3>Mail</h3>
                <p style={{color:`white`}}>shagoto1710@cseku.ac.bd</p>
                </li>
                
                </ul>
            </div>

           
        </div>
        )
    }
}

export default Footer;