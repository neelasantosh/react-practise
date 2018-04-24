import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea, Form } from 'formsy-react-components';
import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Main from './Main';
import Cloohawh from './Clooawh';
import 'bootstrap/dist/css/bootstrap.css';
var bootstrap = require('bootstrap');
let bitresult=''
let res;
const storeTime = []
const storeUsd = []
let myform = null;


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bitVal:'',
      bit:'',
      bitDay:'',
      loading:''
    }
  }

  render() {
    return (
      <div className="App container mt-5">
        <Main />
      </div>
    );
  }
}

export default App;
