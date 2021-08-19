import '../../styles/index.scss';

import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';
var _ = require('lodash');
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class editPayment extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            payment: {
                customer_payment_number:1,
                date:new Date,
                customer_id:230005,
                customer_name:'Faizan',
                mode:'Bank',
                description:'Chq No. 5356995',
                amount:10000,
                deposit_to:'Bank SBI',
                bank_charges:10,
                unused_amount:100,
                invoice_payments:[{
                    invoice_number:'',
                    invoice_id:'',
                    adjusted_amount:100,                   
                }]    
            }
            
        }
        
      }
 
      componentDidMount() {
          
        var data = {id:17};
        axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/edit-payment`, data, {}).then(response => {
            this.setState({payment:response.data[0]})
        })
        .catch(error => console.log(error))
          
      }
      
    

    render() {
        this.payment = this.state.payment;

        const SubmitBtn = ()=>{
            var data = this.state.payment;
            axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/edit-payment-2`, data, {}).then(response => {
            
            })
            .catch(error => console.log(error))
        };


        return (
            <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                <table id="table-to-xls">
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td style={{color:'red'}}>94</td>
                    </tr>
                </table>
              <button onClick={SubmitBtn}>Send</button> 
              <pre id="json"> {JSON.stringify(this.state, null, 2)} </pre> 
            </div>
        )
    }
}

export default editPayment
