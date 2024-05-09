import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const url="https://www.google.com/maps/dir//E-300,+Industrial+Area,+Sector+75,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055/@30.6992324,76.6092112,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390feef64000002f:0xb4e01033fa0737dd!2m2!1d76.6916125!2d30.6992584?entry=ttu"
const ContactInfoBlock = ({ iconClass, title, content,footer }) => {
    const [showModal, setShowModal] = useState(false);
 const [values,setValues]=useState() 
    const handleClose = () => {
        setShowModal(false);
       }
       const submit = () => {
        setShowModal(false);
       }
       const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
      setValues({...values,[name]:value})
       }
    const handleShow=()=>{
 if(title=="Office Address")
 { 
    window.open(url, "_blank");
 }
    else    setShowModal(true);
    }
    return (
        <div style={{ flex: 1, border: "2px solid black", borderWidth: "1px 2px 2px", padding: '20px', textAlign: 'center' }}>
            <i className={iconClass} style={{ fontSize: "58px" }}></i>
            <h1>{title}</h1>
            <p style={{ fontSize: "38px" }}>{content}</p>
            <p><i className={iconClass} style={{ fontSize: "38px" }} onClick={handleShow}> {` ${footer}`}</i></p>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="message">Your Message</label>
     
    <textarea className="form-control" 
    placeholder="Your Message" id="message"
    onChange={handleChange}
    ></textarea>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const Contact = () => {
    return (
        <div>
            <br />
            <h1 style={{ fontSize: "35px", fontFamily: 'serif' }}>Contact</h1>
            <br />
            <div style={{ display: 'flex' }}>
                <ContactInfoBlock iconClass="fa fa-phone" title="Phone Number" content="95011 07986" footer="Call Us Now" />
                <ContactInfoBlock iconClass="fa fa-envelope" title="Email Address" content="info@cssoftsolutions.com" footer="Mail Us Now"  />
                <ContactInfoBlock iconClass="fa fa-address-card-o" title="Office Address" content="E-300, Industrial Area, Sector 75 Mohali"footer="Visit    Now" />
            </div>
            
        </div>
    );
}

export default Contact;
