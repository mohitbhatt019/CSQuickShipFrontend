import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductRow({ type, onClick, onInputChange, index }) {
    return (
      <div className="row" style={{ marginLeft: "10px" }}>
        <div className="col-md-3">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            required
            onChange={(e) => onInputChange(index, "productName", e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            required
            onChange={(e) => onInputChange(index, "quantity", e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="amount">Amount (per item):</label>
          <input
            type="text"
            id="amount"
            name="amount"
            required
            onChange={(e) => onInputChange(index, "amount", e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="sku">SKU (Optional):</label>
          <input
            type="text"
            id="sku"
            name="sku"
            onChange={(e) => onInputChange(index, "sku", e.target.value)}
          />
        </div>
        <div
          className="col-md-3"
          style={{ display: "flex", alignItems: "center", marginTop: "23px" }}
        >
          <button
            className={`btn ${type === "primary" ? "btn-primary" : "btn-danger"}`}
            style={{ marginLeft: "10px" }}
            onClick={onClick}
          >
            <i className={type === "primary" ? "fa fa-plus" : "fa fa-trash"}></i>
            {type === "primary" ? "1" : ""}
          </button>
        </div>
      </div>
    );
  }

function ProductDetails() {
    const [productDetails, setProductDetails] = useState({
         products: [
        { 
        productName: "",
        quantity: "",
        amount: "",
        sku: "",
        },
      ],
        weight: "",
        length: "",
        width: "",
       height: "",
        });
 const nav=useNavigate();
const location=useLocation()

 const addRow = () => {
    setRows((prevRows) => [
      ...prevRows.slice(0, -1),
      <ProductRow
        type="danger"
        index={prevRows.length - 1}
        onInputChange={handleInputChange}
        onClick={() => removeRow(prevRows.length - 1)}
      />,
      <ProductRow
        type="primary"
        index={prevRows.length}
        onInputChange={handleInputChange}
        onClick={addRow}
      />,
    ]);
    setProductDetails((prevDetails) => ({
        ...prevDetails,
        products: [
          ...prevDetails.products,
          {
            productName: "",
            quantity: "",
            amount: "",
            sku: "",
          },
        ],
      }));
  };
  const removeRow = (index) => {
    setRows((prevRows) =>
      prevRows.filter((row, i) => i !== index).map((row, i) =>
        i >= index
          ? React.cloneElement(row, { index: i, onClick: () => removeRow(i) })
          : row
      )
    );
    setProductDetails((prevDetails) => ({
        ...prevDetails,
        products: prevDetails.products.filter((_, i) => i !== index),
      }));
  };
//   const removeRow = (index) => {
//     setRows((prevRows) => prevRows.filter((row, i) => i !== index));
//   };


const handleInputChange = (index, field, value) => {
    setProductDetails((prevDetails) => {
      const updatedProducts = [...prevDetails.products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: value,
      };
      return {
        ...prevDetails,
        products: updatedProducts,
      };
    });
  };

  const [rows, setRows] = useState([
    <ProductRow
      type="danger"
      index={0}
      onInputChange={handleInputChange}
      onClick={() => removeRow(0)}
    />,
    <ProductRow
      type="primary"
      index={1}
      onInputChange={handleInputChange}
      onClick={addRow}
    />,
  ]);


  const handleWeightChange = (e) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      weight: e.target.value,
    }));
  };

  const handleDimensionChange = (field, value) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const completeOrder = () => {
    // Save the product details and navigate to the "/completeOrder" route
    console.log("Product Details:", productDetails);
    const  createOrders  = location.state;
   nav("/completeOrder", { state: { productDetails, createOrders } });
  };


  return (
    <div>
      <h2
        style={{
          backgroundColor: "#ABB2B9",
          textAlign: "left",
          marginTop: "20px",
        }}
      >
        Product Details
      </h2>
      {rows.map((row, index) => (
        <div key={index} >{row}</div>
      ))}

      <br />
      <div className="col-md-3" style={{ margin: "40px" }}>
        <label htmlFor="weight" style={{ textAlign: "left" }}>
          Weight(in grams):
        </label>
        <input
          type="text"
          id="weight"
          name="weight"
          required
          value={productDetails.weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="col-md-6 row" style={{ margin: "40px" }}>
        <label htmlFor="dimensions" style={{ textAlign: "left" }}>
          Dimensions:
        </label>
        <div className="col-md-2">
          <input
            type="number"
            id="length"
            name="weight"
            placeholder="Length"
            value={productDetails.length}
            onChange={(e) => handleDimensionChange("length", e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            id="width"
            name="weight"
            placeholder="Width"
            value={productDetails.width}
            onChange={(e) => handleDimensionChange("width", e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            id="height"
            name="weight"
            placeholder="Height"
            value={productDetails.height}
            onChange={(e) => handleDimensionChange("height", e.target.value)}
          />
        </div>
      </div>
      <div className="row" style={{ justifyContent: "flex-end", margin: "40px 0" }}>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={completeOrder} style={{ marginRight: "10px" }}>
            Save
          </button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
