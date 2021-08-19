import '../../styles/index.scss';

import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';
var _ = require('lodash');


export class trialBalance extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           trialBalance: []
            
        }
        
      }

      componentDidMount() {
          
        var data = {from: ''};
        axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/trial-balance`, data, {}).then(response => {
        this.setState({trialBalance:response.data})
        })
        .catch(error => console.log(error))
          
      }
      
    

    render() {
        this.invoice = this.state.invoice;

        const SubmitBtn = ()=>{
            var data = {};
            axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/trial-balance`, data, {}).then(response => {
            this.setState({trialBalance:response.data})
            })
            .catch(error => console.log(error))
        };

        const invoiceNumberUpdate = (e)=>{
            var invoice = this.state.invoice;
            invoice.Invoice_Number=e.target.value;
            this.setState({invoice});
        }



        return (
            <div>
              <button onClick={SubmitBtn}>Send</button> 
              <pre id="json"> {JSON.stringify(this.state.trialBalance, null, 2)} </pre> 
            </div>
        )
    }
}

export default trialBalance
