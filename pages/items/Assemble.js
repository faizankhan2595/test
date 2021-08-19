import '../styles/index.scss';

import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';

class GooglePixel3Xl extends React.Component {
  constructor(props) {
	super(props);
	
	this.state = {


	}
	
  }

  componentDidMount() {

	
	  
	  

	  
  }
   

  render() {
    const {  props } = this;

    
    const SubmitBtn = ()=>{
        var data = this.state.invoice;
        axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/new-invoice`, data, {}).then(response => {
        
        })
        .catch(error => console.log(error))
    };

    return (
      <>
        <button onClick={SubmitBtn}>Send</button>
      
      </>
    );
  }
}


export default GooglePixel3Xl;
