import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                 
                 <img src="assets/beers.png" alt="beersimg"></img>
                 <div><Link to="/beers">Beers</Link></div>   
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a pharetra mi, ut vestibulum ligula. </p>
               
                <img src="assets/random-beer.png" alt="beersimg"></img>
                <div> <Link to="/random-beer">Random Beers</Link></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a pharetra mi, ut vestibulum ligula. </p>
               
               <img src="assets/random-beer.png" alt="beersimg"></img>
               <div> <Link to="/new-beer">New Beers</Link></div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a pharetra mi, ut vestibulum ligula. </p>
            </div>
        )
    }
}
