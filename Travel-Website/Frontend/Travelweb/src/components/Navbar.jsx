import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight, FaCaretDown } from 'react-icons/fa';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Grid, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';  // Import Close icon
import '../styles/Navbar.css';


function Navbar() {
  const [openModal, setOpenModal] = useState(false);  // State to control modal visibility

  const handleBookNowClick = () => {
    setOpenModal(true);  // Show the modal when "Book Now" is clicked
  };

  const handleCloseModal = () => {
    setOpenModal(false);  // Close the modal
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        {/* Location Dropdown */}
        <div className="dropdown-container">
          <span className="dropdown-icon"><FaMapMarkerAlt /></span>
          <select className="dropdown-select" id="location">
            <option>B-128 Transport Nagar, Sector-69, Noida, 201301</option>
            <option>A-24 Industrial Area, Sector-5, Noida, 201301</option>
            <option>C-56/12 Tech Park, Sector-62, Noida, 201307</option>
          </select>
          <span style={{ color: 'gray', marginLeft: '0.5rem' }}>|</span>
        </div>

        {/* Toll-Free and Features */}
        <div id="toll-free">
          <div id='tollfreee'>Toll Free 24x7 - 1800 1027 408</div>
          <div id='top-bar-item'>
            <span>Offer</span> | <span> Live Tracking</span> | <span> FAQ</span> | <span> Support</span> | <span>Wallet </span> |
            <select className="dropdown-select" style={{ color: 'black' }}>
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Bushire" id="heading">
            <img src="https://antbus.in/frontend/assets/images/logo2.png" alt="logo" id="head-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-item">
              <li className="nav-item">
                <a className="nav-link active" href="/Bushire" style={{ color: '#1d3557' }}>Bus Hire</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ color: '#1d3557' }}>Minivan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ color: '#1d3557' }}>Car Hire</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ color: '#1d3557' }}>Bus Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ color: '#1d3557' }}>Bus Tour</a>
              </li>
            </ul>

            {/* Button Box with Book Now and Manage Booking */}
            <div className="d-flex" id="button-box">
              <button className="btn btn-outline-light me-2" id="button-box-book" onClick={handleBookNowClick}>
                Book Now <img src="https://antbus.in/frontend/assets/img/icon/arrow-right.svg" alt="" />
              </button>
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" id="button-box-manage" data-bs-toggle="dropdown" aria-expanded="false">
                  Manage Booking
                </button>
                <ul className="dropdown-menu" aria-labelledby="button-box-manage" id="button-dropdown">
                  <li><a className="dropdown-item" href="#">Cancel Booking</a></li>
                  <li><a className="dropdown-item" href="#">Change Travel Date</a></li>
                  <li><a className="dropdown-item" href="#">Show My Booking</a></li>
                  <li><a className="dropdown-item" href="#">Email/SMS</a></li>
                  <li><a className="dropdown-item" href="login">Login</a></li>
                  <li><a className="dropdown-item" href="register">Signup</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Selecting Service */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="xs" fullWidth>
        <DialogTitle>
          Select Service
          {/* Close button (cross button) in the top right */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
            style={{
              position: 'absolute',
              top: 8,
              right: 15,
              border: '2px solid black'
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column" alignItems="center">
            {/* Manually specify each option with its image and text */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'transform 0.3s ease',
                  height: '90px',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '80px',
                    marginRight: '12px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src="https://antbus.in/frontend/assets/images/bushire.png" // Replace with actual image URL
                    alt="Bus Hire"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#000',
                    textAlign: 'center',
                    padding: '1rem 0',
                    marginLeft: '15rem',
                    marginTop: '0rem'
                  }}
                >
                  Bus Hire
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'transform 0.3s ease',
                  height: '90px',

                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '80px',
                    marginRight: '12px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src="https://antbus.in/frontend/assets/images/minivan.png" // Replace with actual image URL
                    alt="Minivan"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#000',
                    textAlign: 'center',
                    padding: '1rem 0',
                    marginLeft: '15rem',
                    marginTop: '6.5rem'
                  }}
                >
                  Minivan
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'transform 0.3s ease',
                  height: '90px',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '80px',
                    marginRight: '12px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src="https://antbus.in/frontend/assets/images/carhire.png" // Replace with actual image URL
                    alt="Car Hire"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#000',
                    textAlign: 'center',
                    padding: '1rem 0',
                    marginLeft: '15rem',
                    marginTop: '13rem'
                  }}
                >
                  Car Hire
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'transform 0.3s ease',
                  height: '90px',

                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '80px',
                    marginRight: '12px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src="https://antbus.in/frontend/assets/images/busticket.png" // Replace with actual image URL
                    alt="Bus Ticket"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#000',
                    textAlign: 'center',
                    padding: '1rem 0',
                    marginLeft: '15rem',
                    marginTop: '19.5rem'
                  }}
                >
                  Bus Ticket
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'transform 0.3s ease',
                  height: '90px',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '80px',
                    marginRight: '12px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src="https://antbus.in/frontend/assets/images/bustour.png" // Replace with actual image URL
                    alt="Bus Tour"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#000',
                    textAlign: 'center',
                    padding: '1rem 0',
                    marginLeft: '15rem',
                    marginTop: '26rem'
                  }}
                >
                  Bus Tour
                </Typography>
              </div>
            </Grid>
          </Grid>
        </DialogContent>



      </Dialog>
    </>
  );
}

export default Navbar;
