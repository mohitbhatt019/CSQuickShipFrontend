const aboutText = {
  visionText:
    "To provide our customers with easy efficient & economical integrated logistics solutions through innovative systems and processes implemented by a highly proficient tea",
  missionText:
    "To deliver the highest level of customer satisfaction by providing customized and value-added logistics" +
    "solutions while maintaining the highest standards of ethical business practices.",
    carrierChargesData: [
      {
        'S.NO': 1,
        PROVIDER: 'Blue dart Surface',
        'COURIER CHARGES': 59.66,
        'COD CHARGES': 0,
        'TOTAL CHARGES': 59.66
      },
      {
        'S.NO': 2,
        PROVIDER: 'Blue dart',
        'COURIER CHARGES': 74.58,
        'COD CHARGES': 0,
        'TOTAL CHARGES': 74.58
      },
      {
          'S.NO': 3,
          PROVIDER: 'Amazon Shipping',
          'COURIER CHARGES': 56.78,
          'COD CHARGES': 0,
          'TOTAL CHARGES': 56.78
        },
        {
          'S.NO': 4,
          PROVIDER: 'Amazon Shipping 1 KG',
          'COURIER CHARGES': 104.24,
          'COD CHARGES': 0,
          'TOTAL CHARGES': 104.24
        },
        {
          'S.NO': 5,
          PROVIDER: 'Amazon Shipping 2 KG',
          'COURIER CHARGES': 136.44,
          'COD CHARGES': 0,
          'TOTAL CHARGES': 136.44
        },
        {
          'S.NO': 6,
          PROVIDER: 'DTDC Air',
          'COURIER CHARGES': 54,
          'COD CHARGES': 0,
          'TOTAL CHARGES': 54
        },
        {
          'S.NO': 7,
          PROVIDER: 'Ekart',
          'COURIER CHARGES': 52,
          'COD CHARGES': 0,
          'TOTAL CHARGES': 52
        },
    ],
 orderData : [
      {
        id: 1,
        carrier: 'Carrier 1',
        created: '2024-04-24',
        product: 'Product 1',
        payment: 100,
        weight: 5,
        phone: '123-456-7890',
      },
      {
        id: 2,
        carrier: 'Carrier 2',
        created: '2024-04-23',
        product: 'Product 2',
        payment: 150,
        weight: 7,
        phone: '987-654-3210',
      },
      {
        id: 3,
        carrier: 'Carrier 3',
        created: '2024-04-23',
        product: 'Product 3',
        payment: 250,
        weight: 8,
        phone: '987-654-3210',
      },
  
    ]
};


const StaticText = {
  ...aboutText,
};
export default StaticText;
