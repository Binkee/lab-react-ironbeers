import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Beers extends Component {

    state = {
      beers: []
    }

    componentDidMount() {
     axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response)=>{
            this.setState({ beers: response.data })
        })
        .catch(()=>{
            console.log("err")
        })
    }

    render() {
        const {beers} = this.state
        return (
            <div>
                 {
                    beers.map((singleBeer, index)=>{
                        return  <div>
                             <Link to={`beers/${singleBeer._id}`}>
                            <img className="img" src={singleBeer.image_url}/> </Link>
                             <h6>{singleBeer.name}</h6> 
                            <h6>{singleBeer.contributed_by}</h6>
                            <h6>{singleBeer.tagline}</h6>
                            <hr></hr>
                           
                            </div>
                            
                           
                    })
                 }

            </div>
        )
    }
}
