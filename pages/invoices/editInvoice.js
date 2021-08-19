import '../../styles/index.scss';

import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';
var _ = require('lodash');

var TaxGroups = [{label:0,value:"GST0"},{label:1,value:"GST5"}];

export class editInvoice extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           invoice: {
            
           } 
            
        }
        
      }

      componentDidMount() {
          
        var data = {id:35};
        axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/edit-invoice`, data, {}).then(response => {
        this.setState({invoice:response.data[0]})
        })
        .catch(error => console.log(error))
          
      }
      
    

    render() {
        this.invoice = this.state.invoice;

        const SubmitBtn = ()=>{
            var data = this.state.invoice;
            axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/edit-invoice-2`, data, {}).then(response => {
            
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
              <input type="text" placeholder="Invoice Number" value={this.invoice.Invoice_Number} onChange={invoiceNumberUpdate} />
              <pre id="json"> {JSON.stringify(this.state.invoice, null, 2)} </pre> 
            </div>
        )
    }
}

export default editInvoice
