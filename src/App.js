import './App.css';
import Home from './components/Home'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer';
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <Switch>
        <Route exact path="/" render={()=>{
           return <Home/>
          }}/>
          <Route path="/beers" render={()=>{
            return  <Beers/>
          }}/>
         <Route path="/randombeers" render={()=>{
            return  <RandomBeer/>
          }}/>
          <Route path="/beers" render={()=>{
            return  <NewBeer/>
          }}/>
          <Route path="/beers/:singleBeer._id" render={()=>{
            return <singleBeer/> 
          }}/>
        </Switch>
      </div>
    )
  }
}

