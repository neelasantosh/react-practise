import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


export default class Responsive extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Grid  columns='equal'>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>1</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 divFirst">

            </div>
            <div className="col-lg-4 col-sm-6 col-12 divFirst">

            </div>
            <div className="col-lg-4 col-sm-6 col-12 divFirst">

            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 divFirst"></div>
            <div className="col-6 col-md-4 divFirst"></div>
          </div>

          <div className="row">
            <div className="col-6 col-md-4 divFirst"></div>
            <div className="col-6 col-md-4 divFirst"></div>
            <div className="col-6 col-md-4 divFirst"></div>
          </div>

          <div className="row">
            <div className="col-6 divFirst"></div>
            <div className="col-6 divFirst"></div>
          </div>
        </div>
      </div>
    )
  }

}
