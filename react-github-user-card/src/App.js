import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FollowersList from "./FollowersList";
import MyProfile from "./MyProfile";

class App extends Component {

  constructor () {
    super();
    this.state = {
      followers: [],
      myprofile: []
    }
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/marvinlewis/followers')
    .then(res => {
      const followersdata =  res.data;
      this.setState({
        followers: followersdata,
      })
  })

  axios.get('https://api.github.com/users/marvinlewis')
  .then(res => {
    const myprofile = res.data;
    this.setState({
      myprofile: myprofile,
    })
  } )
 
  };



  render(){
    //console.log(this.state.followers)
    //console.log(this.state.myprofile)
  return (
    <div className="App">
      <MyProfile myprofile={this.state.myprofile}/>
      <FollowersList followers={this.state.followers}/>


    </div>
  );
 }
}

export default App;
