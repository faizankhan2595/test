//import '../styles/index.scss';

import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';

class GooglePixel3Xl extends React.Component {
  constructor(props) {
	super(props);
	
	this.state = {
        item: {
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
	<div>
		<h3 >
      New Item {}
    </h3>
	</div>
	<div>
		<form autoComplete="off">
			<div>
				<fieldset>
					<legend >Type</legend>
					<div>
						<input name="productType" type="radio" defaultValue="goods"  />
						<label htmlFor="esSnn" >Goods</label>
					</div>
					<div>
						<input name="productType" type="radio" defaultValue="service"  />
						<label htmlFor="I1XHS" >Service</label>
					</div>
				</fieldset>
				<div>
					<label >Name</label>
					<div>
						<input type="text" autofocus="autofocus"  />
					</div>
				</div>
				<div>
					<label> SKU	</label>
					<div>
						<input type="text" name="name" value={this.item.name} onChange={changeTextFields} />
					</div>
				</div>
				<div>
					<label> Unit	</label>
					<div>
						<input type="text"  />
					</div>
				</div>
				<div>
					<label >Category</label>
					<div >Select or Type to add</div>
				</div>
				<div>
					<input type="checkbox"  />
					<label htmlFor="pKLsm"> <em >
            </em>
					</label>
				</div>
				<div>
					<label >HSN Code</label>
					<div>
						<input type="text"  />
					</div>
				</div>
				<fieldset>
					<legend >Tax Preference</legend>
					<div>
						<input name="taxPreference" type="radio" defaultValue="true"  />
						<label htmlFor="pnpwg" >Taxable</label>
					</div>
					<div>
						<input name="taxPreference" type="radio" defaultValue="false"  />
						<label htmlFor="GfkaK" >Non-Taxable</label>
					</div>
				</fieldset>
			</div>
			<div>
				<label >Drag image(s) here or</label>
				<br  />
				<br />
			</div>
			<input accept="image/gif,image/jpeg,image/png,image/bmp,image/jpg" multiple="multiple" type="file"  />

				<label >Price</label>
				<div>
					<input type="text"  />
				</div>

			<hr  />
			<div>
				<input type="checkbox"  />
				<label htmlFor="a-ZDv" >Sales Information</label>
			</div>
			<div>
				<label >Selling Price</label>
				<div >INR</div>
				<input type="text"  />
			</div>
			<div>
				<label >Account</label>
				<div >Sales</div>
			</div>
			<div>
				<label >Description</label>
			</div>
			<hr  />
			<h4 >
        Default Tax Rates
      </h4>
			<div>
				<label >Intra State Tax Rate</label>
				<div >GST18 (18 %)</div>
			</div>
			<div>
				<label >Inter State Tax Rate</label>
				<div >IGST18 (18 %)</div>
			</div>
			<div>
				<input type="checkbox"  />
				<label htmlFor="E-lfW" >Purchase Information</label>
			</div>
			<div>
				<label >Cost Price</label>
				<div >INR</div>
				<input type="text"  />
			</div>
			<div>
				<label >Account</label>
				<div >Cost of Goods Sold</div>
			</div>
			<div>
				<label >Description</label>
			</div>
			<hr  />
			<div>
				<input type="checkbox"  />
				<label htmlFor="3eWkL"> <em >
          </em>
				</label>
			</div>
			<p >You cannot enable/disable inventory tracking once you've created transactions for this item</p>
			<div>
				<label >Inventory Account</label>
				<div >Select Account</div>
			</div>
			<div>
				<label >Opening Stock</label>
				<div>
					<input type="text"  />
				</div>
			</div>
			<div>
				<label >Opening Stock Rate per Unit</label>
				<div>
					<input type="text"  />
				</div>
			</div>
			<div>
				<label >Reorder Point</label>
				<div>
					<input type="text"  />
				</div>
			</div>
			<div>
				<label >Preferred Vendor</label>
			</div>
			<label >The Opening Stock of this item will be updated in the Primary Warehouse.</label>
			<hr  />
			<fieldset>
				<legend >Advanced Inventory Tracking</legend>
				<div>
					<input type="radio" defaultValue="none"  />
					<label htmlFor="NEpfE" >None</label>
				</div>
				<div>
					<input type="radio" defaultValue="track_serial_number"  />
					<label htmlFor="sqTen" >Track Serial Number</label>
				</div>
				<div>
					<input type="radio" defaultValue="track_batch_number"  />
					<label htmlFor="0hE2y" >Track Batches</label>
				</div>
			</fieldset>
			<div>
				<label >Enter the serial numbers for your Opening Stock</label>
				<label >count: 3</label>
				<div>
					<ul>
						<li>
							<div>
								<button type="button" data-ember-action data-ember-action-1710={1710} >×</button>
							</div>
						</li>
						<li>
							<div>
								<button type="button" data-ember-action data-ember-action-1711={1711} >×</button>
							</div>
						</li>
						<li>
							<div>
								<button type="button" data-ember-action data-ember-action-1712={1712} >×</button>
							</div>
						</li>
						<li>
							<input type="text" autofocus="autofocus"  />
						</li>
					</ul>
				</div>
			</div>
			<hr  />
			<div>
				<button type="submit" >Save</button>
				<button data-ember-action data-ember-action-1674={1674} >Cancel</button>
			</div>
		</form>
	</div>
</div>

      
      </>
    );
  }
}


export default GooglePixel3Xl;
