

import React, { Component } from 'react'
import './App.css';
import Form from './components/Form'
import Card from './components/Card'
import LinearChart from './components/LinearChart';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {connect} from 'react-redux'
import { addCard } from './components/redux/actions';


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      value:'',
      id:'',
      isRowDisplay:true,
      cards:[]
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  disableRow = (e) =>{
    this.setState({
      ...this.state,
      isRowDisplay: !this.state.isRowDisplay
    })
  }

  createCard =()=>{
    var obj = {}
    obj["name"]=this.state.name
    obj["value"]=this.state.value
    obj["id"]=Math.random().toString().slice(2,11)
    this.props.addCard(obj)
  }

  render(){
    return (
      <div className="App mt-5">
        <Router>
          <Route path="/" exact> <Form handleChange={this.handleChange} state={this.state} disableRow={this.disableRow}/></Route>
          <Route path="/" exact><Card createCard={this.createCard}/></Route>
          <Route path="/chart" exact><LinearChart /></Route>
        </Router>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
}

export default connect(mapStateToProps,{addCard})(App);