import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      backgroundColor: '#f2f2f2',
    },
    tableRow: {
      '&:nth-child(even)': {
        backgroundColor: '#f2f2f2',
      },
      '&:hover': {
        backgroundColor: '#5D7287', 
        color: 'white',
      },
    },
  });

function CompleteOrderDetails() {
    const classes = useStyles();
    const location=useLocation()
    const today = new Date();
    const paymentType = location?.state?.createOrders?.orderDetails?.paymentType || ""
    const shipping = location?.state?.createOrders?.shippingDetails || ""
    const billing = location?.state?.createOrders?.billingDetails || ""
    const productsDetails = location?.state?.productDetails || ""

  return (
    <div>CompleteOrderDetails
<br/>
<div className='row' style={{marginTop:"40px"}}>

      <div className='col-md-4' style={{textAlign:'left',margin:"10px"}}>
      <h2 style={{fontSize:"25px",fontFamily:'serif',fontWeight:"bold"}}>Order</h2>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
    <label style={{ marginLeft: '5px',fontWeight:"bold" }}>Order No:</label>
    <p style={{ marginLeft: '5px' }}>1</p>
    </div>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
    <label style={{ marginLeft: '5px',fontWeight:"bold" }}>Date:</label>
    <p style={{ marginLeft: '5px' }}>{today.toLocaleDateString()}</p>
    </div>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
    <label style={{ marginLeft: '5px',fontWeight:"bold" }}>Payment Type:</label>
    <p style={{ marginLeft: '5px' }}>{paymentType}</p>
        </div>
   
      </div>

        <div className='col-md-4' style={{textAlign:'left'}}>
         <h2 style={{fontSize:"25px",fontFamily:'serif',fontWeight:"bold"}}>Shipping Details</h2>
      <p>{shipping.firstName+shipping.lastName}</p>
      <p>{shipping.shippingAddress}</p>
      <p>{shipping.state}</p>
      <p>{shipping.contactNo}</p>
      </div>

      <div className='col-md-3' style={{textAlign:'left'}}>
     <h2 style={{fontSize:"25px",fontFamily:'serif',fontWeight:"bold"}}>Billing Details</h2>
      <p>{billing.firstName+billing.lastName}</p>
      <p>{billing.shippingAddress}</p>
      <p>{billing.state}</p>
      <p>{billing.contactNo}</p>
        </div> 

        <div className='col-md-4' style={{textAlign:'left',margin:"10px"}}>
      <h2 style={{fontSize:"25px",fontFamily:'serif',fontWeight:"bold"}}>Order</h2>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
    <label style={{ marginLeft: '5px',fontWeight:"bold" }}>Weight:</label>
    <p style={{ marginLeft: '5px' }}>{productsDetails.weight}Kg</p>
    </div>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
    <label style={{ marginLeft: '5px',fontWeight:"bold" }}>Dimensions:</label>
    <p style={{ marginLeft: '5px' }}>{productsDetails.length+"*"+ productsDetails.width+"*" +productsDetails.height}</p>
    </div>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
    <label style={{ marginLeft: '5px',fontWeight:"bold" }}>Volumetric Weight:</label>
    <p style={{ marginLeft: '5px' }}>{productsDetails.weight}Kg</p>
        </div>
   
      </div>
    
    </div>
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell>Product</TableCell>
              <TableCell>Product SKU</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Item Price</TableCell>
              <TableCell>Product Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsDetails?.products?.map((row) => (
              <TableRow key={row.sku} className={classes.tableRow}>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.amount * row.quantity }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CompleteOrderDetails