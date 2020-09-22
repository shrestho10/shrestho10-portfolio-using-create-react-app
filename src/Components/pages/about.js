import React, { Component } from 'react'

class About extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div >
            <div style={{marginLeft:`200px`, display:`inline-block`}}>
            <ul >
                <h1>Education</h1>
                <li>
                    <h2>BSc,Computer Science and Engineering
                    </h2>
                    <p>-Khulna University
                    </p>
                    <p>2017-2021</p>
                    </li>
                    <li>
                    <h2>HSC
                        </h2>
                        <p>-M M City College,Khulna
                    </p>
                    <p>2016</p>
                    </li>
                    <li>
                    <h2>SSC
                        </h2>
                        <p>-Khulna Zilla School
                    </p>
                    <p>2014</p>
                    </li>
            </ul>
            </div>
    
            <div style={{marginLeft:`120px`, display:`inline-block`,marginRight:'100px'}}>
            <ul>
                <h1>Certifications</h1>
                <li>
                    <p>Divisional Math Olympiad
                    </p>
                    <p>1st Runner-up
                    </p>
                    <p>2009,2010</p>
                    </li>
                    <li>
                    <p>ProthomAlo i-Genius
                        </p>
                        <p>2nd Runner-up
                    </p>
                    <p>2013</p>
                    </li>
                    <li>
                    <p>Coursera Online Certifications</p>
                       
                       
                           <p>Machine Learning,
                           Deep Learning,
                           Coursera,</p>
                          <p> Web Development,
                           Data Science,
                           </p>
                       
                    </li>
            </ul>
            </div>
    
    
          
           
            
            </div>
        )
    }
}

export default About;