import { Switch, Box, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import React, { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function ShippingRule() {
  const [open, setOpen] = useState(false);
  const shippingRules = [
    {
      weight: '<1 Kg',
      priorityRules: [
        { priority: 1, carrier: 'Amazon Shipping 1 Kg' },
        { priority: 2, carrier: 'Shadowfax-Surface 1 Kg' },
        { priority: 3, carrier: 'Delhivery Surface' },
        { priority: 4, carrier: 'Xpressbess 1 Kg' },
      ],
    },
    {
      weight: '>1 Kg',
      priorityRules: [
        { priority: 1, carrier: 'Delhivery Surface' },
        { priority: 2, carrier: 'Shadowfax-Surface 1 Kg' },
        { priority: 3, carrier: 'Amazon Shipping 1 Kg' },
        { priority: 4, carrier: 'Xpressbess 1 Kg' },
      ],
    },
  ];
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="row justify-content-between align-items-center" style={{ marginBottom: "1rem" }}>
        <div className="col-auto">
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Shipping Rule</h1>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }} onClick={handleOpen}>
            <i className="fa fa-plus"></i>New BusinessRule
          </button>
        </div>
      </div>

<Grid container spacing={2}>
        {shippingRules.map((rule, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              borderColor="grey.500"
              borderWidth={1}
              borderStyle="solid"
              p={2}
              display="flex"
              flexDirection="column"
              height="100%"
            >
              <Typography variant="h6" gutterBottom>
                Shipment {rule.weight}
              </Typography>
              {rule.priorityRules.map((priorityRule, priorityIndex) => (
                <Box key={priorityIndex} display="flex" alignItems="center" mb={1}>
                  <Typography variant="body1" mr={2}>
                    Priority {priorityRule.priority}:
                  </Typography>
                  <Typography variant="body1">{priorityRule.carrier}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Business Rule</DialogTitle>
        <DialogContent>
        
          <p>This is the modal content.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ShippingRule;
