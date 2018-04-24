import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea, Form } from 'formsy-react-components';
import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
var bootstrap = require('bootstrap');
let bitresult=''
let res;
const storeTime = []
const storeUsd = []
let myform = null;


export default class Cloohawh extends Component {
  constructor(props){
    super(props)
    this.state = {
      bitVal:'',
      bit:'',
      bitDay:'',
      loading:''
    }
  }

  submitForm = (data) => {
    this.setState({loading:'Please wait,loading....'})
    $.ajax({
      type: "GET",
      url: 'https://infinite-depths.herokuapp.com/forecast?code='+data['bitval'],
      cache: false,
      success: function(result){
         bitresult = JSON.parse(result)
         this.resultCall()
      }.bind(this),
      error: function(result){
        alert('Error,please enter correct value')
      }.bind(this)
    });
  }

  resultCall = () => {
    this.setState({loading:''})
    const resultfilter = bitresult.forecast!==undefined ?  bitresult.forecast : 'NA'
    for (var i = 0; i < resultfilter.length; i++) {
      if (moment().add(+30, 'days').format('DD-MM-YYYY') === moment(resultfilter[i]['timestamp']).format('DD-MM-YYYY')) {
        storeTime.push(resultfilter[i]['timestamp'])
        storeUsd.push(resultfilter[i]['usd'])
        this.setState({'bit':resultfilter[i]['usd'],bitDay:resultfilter[i]['when']})
      }
    }
    this.setState({bitVal:''})
  }

  render() {
    return (
      <div className="App container mt-5">
        <Form onSubmit={this.submitForm} layout='horizontal' className="custom-classname-is-rendered" validateOnSubmit={this.validateOnSubmitChoice}>
        <Input
           name="bitval"
           value={this.state.bitVal}
           label="Enter Value"
           type="text"
           placeholder="Here is a text input."
           help="This is a required text input."
           required
         />
         <fieldset>
          <Row>
            <input
              className="btn btn-primary"
              type="submit"
              defaultValue="Submit"
            />
          </Row>
        </fieldset>
          <p>{this.state.loading}</p>
          <p>{this.state.bitDay != '' ? this.state.bitDay+' to reach': 'From When'}</p>
          {
            this.state.bit !== '' ? this.state.bit : 'USD Value'
          }
        </Form>

        <li><Link to='/responsive'>Home</Link></li>
      </div>
    );
  }
}
