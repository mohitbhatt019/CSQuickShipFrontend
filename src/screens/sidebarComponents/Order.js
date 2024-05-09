import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import { useNavigate } from 'react-router-dom';
import StaticText from '../../constants/text';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'black', 
      },
  },
});

function Order() {
  const classes = useStyles();
const nav =useNavigate()
const orderData = StaticText.orderData;

  function Createorder() {
   nav("/createorders")
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "MenuText", margin: "20px", fontWeight: "bold", fontSize: "24px" }}>
          Orders
        </div>
        <div style={{ textAlign: "right;" }}>
          <Button variant="contained" color="primary" style={{ margin: "20px" }}>
            <DescriptionIcon />&nbsp;Export
          </Button>
          <Button variant="contained" color="primary" onClick={Createorder} style={{ margin: "10px" }}>
            <AddIcon />&nbsp;Create Orders
          </Button>
        </div>
      </div>

      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>Carrier</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.carrier}</TableCell>
                <TableCell>{row.created}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.payment}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  {/* Your action buttons here */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Order;
