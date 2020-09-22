import React, { Component } from 'react'

class Hobbie extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div style={{marginLeft:'200px'}}>
            <div>
                <h1>Hobbies:</h1>
                <ul>
                    <li>Making Games</li>
                    <li>Short Film Making</li>
                    <li>Photography</li>
                    <li>Playing Cricket</li>
                    <li>Touring</li>
                </ul>
                </div>



        </div>
        )
    }
}

export default Hobbie;