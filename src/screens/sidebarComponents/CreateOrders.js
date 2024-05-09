import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateOrders() {
  const [orderDetails,setOrderDetails]=useState({paymentType : "COD"})
  const [shippingDetails,setshippingDetails]=useState({})
  const [billingDetails,setBillingDetails]=useState({})
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(false);

const nav =useNavigate();

function sumbitClick(){
  
  if (
    Object.keys(shippingDetails).length === 0 ||
    Object.keys(orderDetails).length === 0 ||
    Object.keys(billingDetails).length === 0
  ) {
    if(Object.keys(shippingDetails).length === 0)
    {
      alert("Please Enter details of Shipping")
    }
    else if(Object.keys(billingDetails).length === 0)
    {
      alert("Please Enter details of Billing")
    }
    else
    {
      alert("Please Enter details of All")
    }
  }

else{
  var data={
    shippingDetails,
    orderDetails,
    billingDetails
  }
  console.log(data)
  nav("/product" ,{state:data})
}
}

const Ordertypes=(e)=>{
setOrderDetails({...orderDetails,[e.target.name]:e.target.value})
}

const ShippingChange=(e)=>{
  if (!isBillingSameAsShipping) {
    setshippingDetails({...shippingDetails,[e.target.name]:e.target.value})
  }
  }

  const Billingchange=(e)=>{
  setBillingDetails({...billingDetails,[e.target.name]:e.target.value})
  }

  const checkboxChange=(e)=>{
    setIsBillingSameAsShipping(e.target.checked);
  if(e.target.checked==true)
{
  setBillingDetails(shippingDetails)
 }
else{
  setBillingDetails({});
  document.querySelectorAll('.billing-info input').forEach(input => {
    input.value = '';
  });
}
    }
    const disableFields = isBillingSameAsShipping || (isBillingSameAsShipping && Object.keys(billingDetails).length > 0);
 
    return (
  <div class="form-container">
  <h2>Create Order Information</h2>

  <form class="order-form">
  <div class="row form-group">
  <div class="col-md-4">
    <label for="orderID">Order ID:</label>
    <input type="text" id="orderID" name="orderID" value="Auto-generated" disabled/>
  </div>
  <div class="col-md-4" style={{margin:"2px"}}>
    <label for="orderType">Order Type:</label>
    <select id="orderType" name="paymentType" onChange={Ordertypes}>
      <option value="COD" selected>Cash on Delivery (COD)</option>
      <option value="prepaid">Prepaid</option>
    </select>
  </div>
</div>

    <div class="form-section">
      <div class="flex-container">
        <div class="shipping-info">
          <input type="text" id="ship" name="firstName" value="Shipping Information" disabled/>
          <div className='row' style={{margin:"10px"}}>
         <div className='col-md-6'>
         <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" onChange={ShippingChange} value={shippingDetails?.firstName}/>
         </div>
         <div className='col-md-6'>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName"  onChange={ShippingChange} value={shippingDetails?.lastName}/>
        </div>
        </div>
        <div className='row' style={{margin:"10px"}}>
         <div className='col-md-6'>
         <label for="email">Email:</label>
          <input type="text" id="email" name="email"  onChange={ShippingChange} value={shippingDetails?.email}/>
         </div>
         <div className='col-md-6'>
          <label for="contactNo">Contact Number:</label>
          <input type="text" id="contactNo" name="contactNo"  onChange={ShippingChange} value={shippingDetails?.contactNo}/>
        </div>
        </div>
        <div className='col-md-11'>
        <label for="shippingAddress">Ship From Address:</label>
          <input type="text" id="shippingAddress" name="shippingAddress"  onChange={ShippingChange} value={shippingDetails?.shippingAddress}/>
        </div>

        <div className='row' style={{margin:"10px"}}>
         <div className='col-md-4'>
         <label for="pinCode">Pin Code:</label>
          <input type="text" id="pinCode" name="pinCode"  onChange={ShippingChange} value={shippingDetails?.pinCode}/>
         </div>
         <div className='col-md-4'>
          <label for="city">City:</label>
          <input type="text" id="city" name="city"  onChange={ShippingChange} value={shippingDetails?.city}/>
        </div>
        <div className='col-md-4'>
          <label for="state">State:</label>
          <input type="text" id="state" name="state"  onChange={ShippingChange} value={shippingDetails?.state}/>
        </div>
        </div>
        </div>
        <div class="billing-info">
        <input type="text" id="ship" name="firstName" value="Billing Information" disabled/>
          <input type="checkbox" onChange={checkboxChange} id="sameAddress" name="sameAddress"/>
          <label for="sameAddress">Check this box if Shipping and Billing information are the same</label>
          <div className='row' style={{margin:"10px"}}>
         <div className='col-md-6'>
         <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName"disabled={disableFields} onChange={Billingchange} value={billingDetails?.firstName}/>
         </div>
         <div className='col-md-6'>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName"disabled={disableFields} onChange={Billingchange} value={billingDetails?.lastName}/>
        </div>
        </div>
        <div className='row' style={{margin:"10px"}}>
         <div className='col-md-6'>
         <label for="email">Email:</label>
          <input type="text" id="email" name="email" disabled={disableFields}onChange={Billingchange} value={billingDetails?.email}/>
         </div>
         <div className='col-md-6'>
          <label for="contactNo">Contact Number:</label>
          <input type="text" id="contactNo" disabled={disableFields} name="contactNo" onChange={Billingchange} value={billingDetails?.contactNo}/>
        </div>
        </div>
        <div className='col-md-11'>
        <label for="shippingAddress">Ship From Address:</label>
          <input type="text" id="shippingAddress"disabled={disableFields} name="shippingAddress"onChange={Billingchange} value={billingDetails?.shippingAddress}/>
        </div>

        <div className='row' style={{margin:"10px"}}>
         <div className='col-md-4'>
         <label for="pinCode">Pin Code:</label>
          <input type="text" id="pinCode"disabled={disableFields} name="pinCode"onChange={Billingchange} value={billingDetails?.pinCode}/>
         </div>
         <div className='col-md-4'>
          <label for="city">City:</label>
          <input type="text" id="city"disabled={disableFields} name="city"onChange={Billingchange} value={billingDetails?.city}/>
        </div>
        <div className='col-md-4'>
          <label for="state">State:</label>
          <input type="text" id="state" disabled={disableFields} name="state"onChange={Billingchange} value={billingDetails?.state}/>
        </div>
        </div>
        </div>
  
      </div>
    </div>

    <input type="submit" value="Submit" onClick={sumbitClick}/>
  </form>
</div>
  )
}

export default CreateOrders