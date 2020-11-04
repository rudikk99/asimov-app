import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import { Jumbotron } from 'react-bootstrap'
import HomeSection from './components/Home'
import NavigationBar from './components/NavigationBar'
import Base from './components/Base.jsx'
import Basesearch from './components/Basesearch.jsx'
import axios from 'axios'
import { configureAnchors } from 'react-scrollable-anchor'

export default class Page extends Component {

  constructor() {
    super();
    this.state = {
      baseForm: {
        fragment: '',
        rex: '',
        isBaseSent: false
      },     
    };
    this.handleBase = this.handleBase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {    
    const obj = {};
    obj['baseForm'] = {...this.state.baseForm}
    obj['baseForm'][event.target.name] = event.target.value;
    this.setState(obj);
  };

  handleBase = (event) => {
    event.preventDefault();
    const data = {...this.state.baseForm}      
    
    axios.post(`base`, data)
    // axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/base`, data)    
      .then((res) => {             
        this.setState({baseForm: {fragment: '', isBaseSent: true}});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    configureAnchors({scrollDuration: 1200})
    return (
      <div>
        <NavigationBar id={'navigation-bar'} brand={"DNA Seq Search"} />
        <HomeSection id={'home'} />
        <Base id={'base'} handleBase={this.handleBase} handleChange={this.handleChange} { ...this.state.baseForm  }/>     
        <Basesearch id = {'basesearch'} />   
      </div>
    )
  }
}
