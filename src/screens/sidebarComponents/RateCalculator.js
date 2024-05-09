import React from 'react'
import { useNavigate } from 'react-router-dom'

function RateCalculator() {

  const nav=useNavigate()
  const CalculteCharges=()=>{
nav("/carrierCharges")
  }
  return (
    <div>RateCalculator

<div style={{display:"flex",flexWrap:"wrap"}}>
  <div style={{flex: 1, marginRight: "10px"}}>
    <label for="pickupPincode">Pickup Pincode:</label>
    <input type="text" id="pickupPincode" name="pickupPincode" placeholder="Enter 6 digit pickup area pincode" />
  </div>
  <div style={{flex: 1}}>
    <label for="deliveryPincode">Delivery Pincode:</label>
    <input type="text" id="deliveryPincode" name="deliveryPincode" placeholder="Enter 6 digit delivery area pincode" />
  </div>
</div>


<div style={{display:"flex",flexWrap:"wrap"}}>
  <div style={{flex: 1, marginRight: "10px"}}>
    <label for="weight">Actual Weight (in grams)*:</label>
    <input type="text" id="weight" name="weight" placeholder="0.00" />
  </div>
  <div style={{flex: 1}}>
<div className='row'>
<div className='col-md-4'>
    <label for="dimensions">Length:</label>
    <input type="text" id="length" name="length" placeholder="Length" />
    </div>
   
    <div className='col-md-4'>
    <label for="dimensions">Width:</label>
    <input type="text" id="width" name="width" placeholder="Width" />
    </div>
    
    <div className='col-md-3'>
    <label for="dimensions">Height:</label>
    <input type="text" id="height" name="height" placeholder="Height" />
    </div>
</div>
    </div>
</div>

<div style={{display:"flex",flexWrap:"wrap"}}>
<div style={{flex: 1,textAlign:"left",marginLeft:"10px"}}>
    <label for="paymentType">Payment Type (Optional):</label> <br/>
    <button className='btn btn-primary' style={{margin:"10px"}}>Cash On Delivery</button>
    <button className='btn btn-secondary'>Prepaid</button>
  </div>
  <div style={{flex: 1, marginRight: "10px"}}>
    <label for="shipmentValue">Shipment Value (*) (Optional):</label>
    <input type="text" id="shipmentValue" name="shipmentValue" placeholder="0.00" />
  </div>
</div>
<button className='btn btn-primary' style={{margin:"10px"}} onClick={CalculteCharges}>Calculate</button>
    <button className='btn btn-secondary'>Reset</button>
    </div>
  )
}

export default RateCalculator