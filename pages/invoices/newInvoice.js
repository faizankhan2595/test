import '../../styles/index.scss';

import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';
var _ = require('lodash');

export class newInvoice extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           invoice: {
            invoice_date: new Date,
            invoice_number:"INV-501",
            invoice_status:"sent",
            customer_name:"ABC",
            customer_id:55200100001,
            place_of_supply:"MP",
            gst_number:"AGGGAAP",
            gst_treatment:"Regular Business",
            is_cash_sales:"false",
            due_date:new Date,
            purchase_order_id:"",
            purchase_order_number:"",
            sales_order_id:"",
            sales_order_number:"",
            estimate_id:"",
            estimate_number:"",
            template_name:"Default_INTER",
            discount_type:"entity_level",
            is_discount_before_tax:"false",
            is_inclusive_tax:"false",
            sub_total:5000,
            total: 5900,
            shipping_charge:0,
            discount_amount:0,
            adjustment:0,
            roundoff_value:0,
            adjustment_description:"",
            balance:5900,
            sales_person:"",
            notes:"",
            terms_conditions:"",
            billing_address:"",
            billing_city:"",
            billing_state:"",
            billing_country:"",
            billing_code:"",
            billing_fax:"",
            billing_phone:"",
            shipping_address:"",
            shipping_city:"",
            shipping_state:"",
            shipping_country:"",
            shipping_code:"",
            shipping_fax:"",
            shipping_phone:"",
            documents:"",
            invoice_items:[{	
                account:'Sales',	 
                item_id:203000000005,
                item_name:"Cooler Fan - 4ft",	 
                sku:"Cooler Fan - 4ft",	 
                item_desc:'Air Cooler 17" Fan',	 
                hsn_or_sac: 8479,	 
                quantity:5, 
                usage_unit:'pcs',	 
                warehouse_name:'Navi Bagh',	 
                item_price:1000, 
                tax_id:250000000001,
                item_tax:'GST18',	 
                item_tax_percentage:18, 
                item_tax_amount:900, 
                item_tax_type:'GROUP',	 
                item_type:'GOODS',	 
                serial_numbers:[],
                item_total:5000,
            }],

           } 
            
        }
        
      }

      componentDidMount() {
          


        console.log()
          
      }
      
    

    render() {
        this.invoice = this.state.invoice;

        const SubmitBtn = ()=>{
            var data = this.state.invoice;
            axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/new-invoice`, data, {}).then(response => {
            
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

export default newInvoice
