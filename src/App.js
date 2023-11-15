//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey = process.env.REACT_APP_APPNEWS_API
  state = {
    progress :0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height = {3}
        shadow = {true}
        color='#f11946'
        progress={this.state.progress}
       />
       
        <Switch>
          <Route exact path="/"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" pageSize={30} country = "in" category = "General" /></Route>
          <Route exact path="/business"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="business" pageSize={30} country = "in" category = "Business" /></Route>
          <Route exact path="/entertainment"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={30} country = "in" category = "Entertainment" /></Route>
          <Route exact path="/health"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="health" pageSize={30} country = "in" category = "Health" /></Route>
          <Route exact path="/science"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" pageSize={30} country = "in" category = "Science" /></Route>
          <Route exact path="/sports"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={30} country = "in" category = "Sports" /></Route>
          <Route exact path="/technology"><News setProgress = {this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={30} country = "in" category = "Technology" /></Route>+

          
        </Switch>
        </Router>
      </div>
    )
  }
}
