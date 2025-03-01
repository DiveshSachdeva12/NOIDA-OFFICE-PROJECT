import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Bushire.css';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";


import { FaStar } from "react-icons/fa";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function Bushire() {
  const [type, setType] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [packageType, setPackageType] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Animate every time it enters the viewport
      mirror: true, // Re-animate when scrolling up
    });
  }, []);


  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settingss: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settingss: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        style={{
          position: "absolute",
          left: "-90px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#364d9d",
          width: "80px",
          height: "50px",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 2,
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}
        data-aos="fade-up"
      >
        
        {/* <FaChevronLeft size={24} color="white" /> */}
        <img src="https://antbus.in/frontend/assets/img/icon/arrow-right.svg" alt="" style={{rotate:'180deg'}} />
      </button>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        style={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#364d9d",
          width: "85px",  
          height: "50px",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 2,
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          left:'77rem'
        }}
        data-aos="fade-up"
      >
        {/* <FaChevronRight size={24} color="white" /> */}
        
        {/* <img src="https://antbus.in/frontend/assets/img/icon/arrow-right.svg" alt="" > */}
        <img src="https://antbus.in/frontend/assets/img/icon/arrow-right.svg" alt=""/>

      </button>
    );
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets & Small Laptops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets & Large Phones
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile Screens
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows for small screens
        },
      },
    ],
  };
  
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "This is an amazing experience!",
      name: "Alice",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "I loved the service!",
      name: "Bob",
      rating: 4,
    },
    {
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Highly recommend to everyone.",
      name: "Charlie",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      text: "A truly unforgettable journey!",
      name: "David",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      text: "Will definitely come back again!",
      name: "Emma",
      rating: 4,
    },
  ];
  
  const images = [
    "https://antbus.in/frontend/assets/images/gallery/1.png",
    "https://antbus.in/frontend/assets/images/gallery/2.png",
    "https://antbus.in/frontend/assets/images/gallery/3.png",
    "https://antbus.in/frontend/assets/images/gallery/4.png",
    "https://antbus.in/frontend/assets/images/gallery/5.png",
    "https://antbus.in/frontend/assets/images/gallery/6.png",
    "https://antbus.in/frontend/assets/images/gallery/7.png",
  ];
  
  const buses = [
    {
      title: "AC Deluxe Bus 49 Seater (2+2)",
      image: "https://rssindia.in.net/bus/image/Ant-bus.png",
      features: ["City : Delhi NCR", "AC Available", "Best for Outstation"],
    },
    {
      title: "AC Deluxe Bus 21 Seater (2+1)",
      image: "https://rssindia.in.net/bus/image/Ant-bus.png",
      features: ["Luxury Seats", "AC Available", "Best for Outstation"],
    },
    {
      title: "AC Deluxe Bus 21 Seater (2+1)",
      image: "https://rssindia.in.net/bus/image/Ant-bus.png",
      features: ["Luxury Seats", "AC Available", "Best for Outstation"],
    },
    {
      title: "AC Deluxe Bus 21 Seater (2+1)",
      image: "https://rssindia.in.net/bus/image/Ant-bus.png",
      features: ["Luxury Seats", "AC Available", "Best for Outstation"],
    },
    {
      title: "AC Deluxe Bus 21 Seater (2+1)",
      image: "https://rssindia.in.net/bus/image/Ant-bus.png",
      features: ["Luxury Seats", "AC Available", "Best for Outstation"],
    },
  ];
  
  
  return (
    <div>
      
      <div className="image-container" data-aos="fade-up">
        <img src="https://antbus.in/frontend/assets/images/banner1.png" alt="Bus Hire" id="bushireimg" />
        <p data-aos="fade-up" id="ptag" >Get Unforgettable pleasure with us</p>
        <h1 id="text" data-aos="fade-up">Explore Beauty of the <br /> Whole World</h1>
        <button className="btn btn-outline-light me-2" id="bushire-button">
          Book Now  <img src="https://antbus.in/frontend/assets/img/icon/arrow-right.svg" alt="" />
        </button>
      </div>

      {/* Dropdown Section */}
      <div className="dropdown-containerrr" data-aos="fade-up">
  <h2 className="heading" data-aos="fade-up">
    Hire a Bus for Convenient & Comfortable Travel
  </h2>
  
  <div className="dropdown-row">
    {/* Select Type */}
    <div className="dropdown-with-icon">
      <label htmlFor="type" className="dropdown-label" data-aos="fade-up">Select Type</label>
      <div className="dropdown-container-with-icon" data-aos="fade-up">
        <img 
          src="https://img.icons8.com/?size=100&id=9351&format=png&color=364d9d" 
          alt="" 
          style={{ height: '35px', marginTop: '-1.8rem' }} 
        />
        <select id="type" className="select-dropdown" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select</option>
          <option value="local">Local Run</option>
          <option value="outstation">Outstation Run</option>
        </select>
        {/* <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="" id='drop-custom-icon'/> */}
      </div>
    </div>

    {/* Horizontal Line */}
    <hr className="dropdown-separator" />

    {/* Select Vehicle */}
    <div className="dropdown-with-icon" data-aos="fade-up">
      <label htmlFor="vehicle" className="dropdown-label">Select Vehicle</label>
      <div className="dropdown-container-with-icon">
        <img 
          src="https://img.icons8.com/?size=100&id=9351&format=png&color=364d9d" 
          alt="" 
          style={{ height: '35px', marginTop: '-1.8rem' }} 
        />
        <select id="vehicle" className="select-dropdown" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
          <option value="">Select</option>
          <option value="acDelux">AC Deluxe Buses</option>
          <option value="acSleeper">AC Sleeper Buses</option>
          <option value="acLuxury">AC Luxury Buses</option>
        </select>
        {/* <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="" id='drop-custom-icon'/> */}

      </div>
    </div>

    {/* Horizontal Line */}
    <hr className="dropdown-separator" />

    {/* Select Package */}
    <div className="dropdown-with-icon" data-aos="fade-up">
      <label htmlFor="packageType" className="dropdown-label">Select Package</label>
      <div className="dropdown-container-with-icon" data-aos="fade-up">
        <img 
          src="https://img.icons8.com/?size=100&id=awSaSllzlFWU&format=png&color=364d9d" 
          alt=""  
          style={{ height: '35px', marginTop: '-1.5rem' }} 
        />
        <select id="packageType" className="select-dropdown" value={packageType} onChange={(e) => setPackageType(e.target.value)}>
          <option value="" style={{fontWeight:'bold'}}>Select</option>
          <option value="4hr40km">4hr/40km</option>
          <option value="8hr80km">8hr/80km</option>
        </select>
        {/* <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="" id='drop-custom-icon'/> */}

      </div>
    </div>

    {/* Horizontal Line */}
    {/* <hr className="dropdown-separator" /> */}

    {/* Search Button */}
    <div className="search-button-container" data-aos="fade-up">
      <button className="search-button" data-aos="fade-up">
        <FaSearch className="search-icon" /> Search Buses
      </button>
    </div>
  </div>
</div>


      {/* Trending Offers Carousel */}
      <div className="trending-offers-container" data-aos="fade-up">
        <p id='trending-p'>Discover the Hottest Deals of the Season</p>
        <h2 className="offers-heading">Trending Offers</h2>
        <Slider {...settingss}>
          <div className="offer-card" data-aos="fade-up">
            <img src="https://static.abhibus.com/offerbanners/Nov2024/16/1731757944-Wedding720x360.webp" alt="Offer 1" />
            {/* <p className="offer-title" data-aos="fade-up">Discounted Local Bus Tour</p>
            <p className="offer-price">From ₹500</p> */}
          </div>
          <div className="offer-card" data-aos="fade-up">
            <img src="https://static.abhibus.com/offerbanners/Jan2025/30/1738222552-KumbhMela-720x360.webp" alt="Offer 2" />
            {/* <p className="offer-title">Exclusive Outstation Package</p>
            <p className="offer-price">From ₹1200</p> */}
          </div>
          <div className="offer-card" data-aos="fade-up">
            <img src="https://static.abhibus.com/offerbanners/Oct2024/28/1730118452-ICICI720x360.webp" alt="Offer 3" />
            {/* <p className="offer-title">Luxury Bus Experience</p>
            <p className="offer-price">From ₹1500</p> */}
          </div>
        </Slider>
      </div>

      {/* Left Side - Image Grid */}
      <div className="trip-container" data-aos="fade-up" >
      <div className="trip-images" data-aos="fade-up">
        <div className="trip-row" data-aos="fade-up">
          <img src="https://antbus.in/frontend/assets/images/about_1_2.png" alt="Short 1" className="trip-small-img1" />
          <img src="https://antbus.in/frontend/assets/images/about_1_3.png" alt="Short 2" className="trip-small-img2" />
        </div>
        <img src="https://antbus.in/frontend/assets/images/about_1_1.png" alt="Long" className="trip-large-img" />
      </div>

      {/* Right Side - Text Content */}
      <div className="trip-text">
        <h2 data-aos="fade-up">Let’s Go Together</h2>
        <h3 style={{fontFamily:'arial'}} data-aos="fade-up">Plan Your Trip With Us</h3>
        <p id='trip-p1' >
          We are one of the oldest transport service providers based in <br /> Delhi/NCR & have been in the industry since 2003.
        </p>
        <p id='trip-p2'>
          We provide services to various multinational companies in New Delhi,  <br />Gurgaon, & Noida on a daily and contract basis.
        </p>
        <p id='trip-p3'>
          We are backed by a qualified, skilled, dedicated, and professional  <br /> workforce that offers end-to-end solutions.
        </p>
      </div>
     
      </div>
      <button className="btn btn-outline-light me-2" id="bushire-buttonnn">
          Read More <FaArrowRight />
        </button>
{/* ================================================================================== */}
<div
  style={{
    backgroundImage: `url("https://antbus.in/frontend/assets/img/bg/tour_bg_1.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
    padding: "80px 5%",
    textAlign: "center",
    
  }}
  data-aos="fade-up"
>
  <h2 id="h1-buses" style={{ color: "white", marginBottom: "20px" }}>
    Experience Luxury on the Move
  </h2>
  <h2 id="bus-heading-2" style={{ color: "white", marginBottom: "30px" }}>
    Comfort with Our AC Deluxe Buses
  </h2>

  {/* Centered Slider */}
  <div  style={{ position: "relative", maxWidth: "90%", margin: "0 auto" }} data-aos="fade-up">
    <Slider {...settings}>
      {buses.map((bus, index) => (
        <div key={index} className="bus-card" style={{ padding: "0 10px" }}>
          <div
            className="card"
            style={{
              width: "100%",
              maxWidth: "25rem",
              minHeight: "350px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              overflow: "hidden",
            }}
          >
            {/* Image with hover effect */}
            <div style={{ overflow: "hidden", borderRadius: "8px" }} data-aos="fade-up">
              <img
                className="card-img-top"
                src={bus.image}
                alt={bus.title}
                style={{
                  height: "210px",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.filter = "brightness(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.filter = "brightness(1)";
                }}
              />
            </div>

            <div className="card-body text-center" data-aos="fade-up">
              <h5 className="card-title" data-aos="fade-up">{bus.title}</h5>
            </div>

            <ul className="list-group list-group-flush" data-aos="fade-up">
              {bus.features.map((feature, i) => (
                <li className="list-group-item text-center" key={i}>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="card-body text-center" data-aos="fade-up">
              <button className="btn btn-outline-primary" data-aos="fade-up">Details</button>
              <button className="btn btn-primary" style={{ marginLeft: "10px" }} data-aos="fade-up">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>


     



</div>
<div className="gallery-section">
  <h1 className="gallery-title">Make Your Tour More Pleasure</h1>
  <h2 className="gallery-subtitle">Recent Gallery</h2>

  <div className="gallery-container">
    {images.map((src, index) => (
      <div className="img-wrapper" key={index} id={`image-${index}`}>
        <img src={src} alt={`Gallery ${index + 1}`} className="gallery-img" id={`img-${index}`} />
        <div className="overlay">
          <FontAwesomeIcon icon={faSearchPlus} size="2x" color="white" />
        </div>
      </div>
    ))}
  </div>
<button id='gallery-button'>View All  <img src="https://antbus.in/frontend/assets/img/icon/arrow-right.svg" alt=""  style={{marginLeft:'0.5rem'}}/></button>
</div>

    </div>
  );
}

export default Bushire;
