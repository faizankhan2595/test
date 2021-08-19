
import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';

class GooglePixel3Xl extends React.Component {
  constructor(props) {
	super(props);
	
	this.state = {
        item: {
        "item_id":1150,
		"product_type": "goods",
		"name": "Audi",
		"sku": "audi",
		"unit": "pcs",
		"description": "",
		"category_id": "233729000000008552",
		"category_name": "Vehicles",
		"hsn_or_sac": "8479",
		"is_taxable": true,
		"tax_exemption_id": "",
		"tax_exemption_code": "",
		"item_tax_preferences": [
			{
			  "tax_specification": "inter",
			  "tax_type": 0,
			  "tax_name": "IGST18",
			  "tax_percentage": 18,
			  "tax_id": "233729000000007226"
			},
			{
			  "tax_specification": "intra",
			  "tax_type": 2,
			  "tax_name": "GST18",
			  "tax_percentage": 18,
			  "tax_id": "233729000000007232"
			}
		  ],
		"image_url": "",
		"sales_rate": 3000,
		"sales_account_id": "233729000000000486",
		"sales_account_name": "Sales",
		"purchase_rate": 2000,
		"purchase_account_id": "233729000000000567",
		"purchase_account_name": "Cost of Goods Sold",
		"track_inventory": true,
		"inventory_account_id": "233729000000008044",
		"inventory_account_name": "Finished Goods",
		"item_type": "inventory",
		"initial_stock": 3,
		"initial_stock_rate": 2000,
		"track_serial_number": true,
		"track_batch_number": false,
		"initital_batches": [],
		"initital_serial_numbers": ["faizan1", "faizan2", "faizan0"],
		"reorder_level": "",
		"is_combo_product": false,
		"mapped_item_id":[{name:'Motor',id:111,Qt:1},{name:'Pump',id:1112,Qt:2}],
		"status": "active",
		"quantity_in_hand": "900",
		"created_at": "2020-02-02T11:59:35+0530",
		"last_modified_at": "2020-02-03T22:43:41+0530",

		"primary_warehouse_id": 25000,
		"primary_warehouse_name": "NaviBagh",
        }

	}
    this.submitMethod = this.submitMethod.bind(this)
  }

  componentDidMount() {

	  
	  var data = {
		"id": "203000000005",
	  }; 
	  
	  axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/edit-item`, data, {}).then(response => {
      this.setState({item:data.response})
	  	   
	  })
	  .catch(error => console.log(error))
	  
  }

  submitMethod() {
    var data = this.state.item; 
	  
    axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/new-item`, data, {}).then(response => {
           
    })
    .catch(error => console.log(error))
  }

  render() {
    const {  props } = this;

    this.item = this.state.item;

    const changeTextFields = (e) => {
        var item = this.state.item;
        item[e.target.name] = e.target.value;
        this.setState({item})
    }

    return (
      <>
       
      <div>
      <pre id="json"> {JSON.stringify(this.state.item, null, 2)} </pre> 
     </div>

      
      </>
    );
  }
}


export default GooglePixel3Xl;
