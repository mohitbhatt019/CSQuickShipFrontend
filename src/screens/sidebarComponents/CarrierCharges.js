import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell,TableContainer,TableHead,TableRow } from '@material-ui/core';
import StaticText from '../../constants/text';

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
function CarrierCharges() {
    const classes = useStyles();
    const carrierChargesData = StaticText.carrierChargesData;
    
      return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
           <TableHead>
           <TableRow>
              <TableCell>S.NO</TableCell>
              <TableCell>PROVIDER</TableCell>
              <TableCell>COURIER CHARGES</TableCell>
              <TableCell>COD CHARGES</TableCell>
              <TableCell>TOTAL CHARGES</TableCell>
            </TableRow>
            </TableHead>
          <TableBody>
            {carrierChargesData?.map((row, index) => (
              <TableRow key={index} className={classes.tableRow}>
                <TableCell>{row['S.NO']}</TableCell>
                <TableCell>{row.PROVIDER}</TableCell>
                <TableCell>{row['COURIER CHARGES']}</TableCell>
                <TableCell>{row['COD CHARGES']}</TableCell>
                <TableCell>{row['TOTAL CHARGES']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
  
      );
    };

export default CarrierCharges