import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/205340676.jpg?k=298ad78cc1c5e6498b885231c06cbb84170f0ba715aac2af632bfb9e3a1b73e0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/209687994.jpg?k=6c47403c211dd6b70009a1496e4ae95751619956914fd80f9ea636bd43bd9fbb&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/209688530.jpg?k=b5e2f1e35ebac6a6b7750b584334aceb51e7c26431a5a4faac63ce206f8c3faa&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/205358326.jpg?k=466e33a3ed4abdb305e682386fdbe71afb7f4008420979437963e00c24831c05&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/205343006.jpg?k=9375795d72cd6940e8c4f9f358336119c949bd3c673a9e3e176de0dc5166f6e5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/209688795.jpg?k=41a1cc7b7d6fa6b68ad3a8b8d4d931f2bba46021169a6b85f4be2957346c2f77&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Ambasador</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Trg kralja Milana 4, Niš, Serbia</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 20m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $214 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Set in Niš, 200 metres from King Milan Square, Ambasador Hotel offers accommodation with free bikes,
                free private parking, a fitness centre and a shared lounge. With a terrace, the 5-star hotel has
                air-conditioned rooms with free WiFi, each with a private bathroom. The accommodation features room service,
                a 24-hour front desk and currency exchange for guests.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-night stay!</h1>
              <span>
                Located in the real heart of Belgrade, this property has an
                excellent location score of 9.9!
              </span>
              <h2>
                <b>$980</b> (7 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
