import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import banner__lg_top_icon from "../../assets/Untitled.png";
import banner__lg_btm_icon from "../../assets/reg-img.png";
import checkicon from "../../assets/check-icon.png";
import id_icon from "../../assets/id-icon.png";
import certificate from "../../assets/certificate.png";
import faq from "../../assets/faq.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import googlePlay from "../../assets/googleplay.png";
import mujib100 from "../../assets/mujib100new.bd925694.png";
import androidapp from "../../assets/androidapp.png";
import appleapp from "../../assets/appleapp.png";

function Home() {
  return (
    <>
      <div className="home__banner">
        <div className="container section__padding">
          <div className="row">
            <div className="home__banner-card">
              <div className="home__banner-lg">
                <Link className="home__banner-lg_link" to="/registration">
                  <div className="home__banner-lg_top">
                    <img
                      className="img-fluid"
                      src={banner__lg_top_icon}
                      alt="icon"
                    />
                    <h4>
                      <strong>
                        VACCINE <br /> REGISTRATION
                      </strong>
                    </h4>
                  </div>
                  <div className="home__banner-lg_btum ">
                    <h6 class="mb-3 text-center">
                      <strong>During Registration You Need</strong>
                    </h6>
                    <img
                      className="img-fluid"
                      src={banner__lg_btm_icon}
                      alt="icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="home__banner-sm">
                <Link to="/card" className="home__banner-sm_link card-1">
                  <img src={checkicon} alt="icon" />
                  <p>
                    <strong>CHECK STATUS</strong>
                  </p>
                </Link>
                <Link to="/card" className="home__banner-sm_link mt card-2">
                  <img src={id_icon} alt="icon" />
                  <p>
                    <strong>VACCINE CARD</strong>
                  </p>
                </Link>
                <Link
                  to="/certificate"
                  className="home__banner-sm_link mt card-3"
                >
                  <img src={certificate} alt="icon" />
                  <p>
                    <strong>CERTIFICATE</strong>
                  </p>
                </Link>
                <Link
                  to="/certificate"
                  className="home__banner-sm_link mt card-4"
                >
                  <img src={faq} alt="icon" />
                  <p>
                    <strong>FAQ</strong>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container section__padding">
        <div className="home__info">
          <div className="home__info-single">
            <a href="/" className="home__info-single_link">
              <span>789</span>
              <span>Hotline</span>
            </a>
          </div>
          <div className="home__info-single">
            <a href="/" className="home__info-single_link">
              <span>5153454453</span>
              <span>Covid-19 Telehealth</span>
            </a>
          </div>
          <div className="home__info-single">
            <a href="/" className="home__info-single_link">
              <span>654</span>
              <span>National Call Center</span>
            </a>
          </div>
          <div className="home__info-single">
            <a href="/" className="home__info-single_link">
              <span>693741</span>
              <span>Health Portal</span>
            </a>
          </div>
          <div className="home__info-single">
            <a href="/" className="home__info-single_link">
              <span>54645</span>
              <span>IEDCR</span>
            </a>
          </div>
          <div className="home__info-single">
            <a href="/" className="home__info-single_link">
              <span>46864654</span>
              <span>All Call Centers</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container section__padding">
        <div className="home__services">
          <div className="home__services-header">
            <h2>The process of receiving the Covid-19 corona vaccine</h2>{" "}
          </div>
          <div className=" row home__services-content  text-center mt-5">
            <div className="col-sm-4 home__services-content_single p-2">
              <img src={services1} alt="servicesImage" />
              <h6 className="p-3">Online Registration</h6>
              <p>
                First, you have to complete the online registration by verifying
                your national identity card and correct mobile number through
                this portal.
              </p>
            </div>

            <div className="col-sm-4 home__services-content_single p-2">
              <img src={services2} alt="servicesImage" />
              <h6 className="p-3">SMS Notification</h6>
              <p>
                After registering online, you will receive a text message on
                your mobile phone mentioning the date of vaccination and the
                name of the vaccination center.
              </p>
            </div>

            <div className="col-sm-4 home__services-content_single p-2">
              <img src={services3} alt="servicesImage" />
              <h6 className="p-3">Vaccination</h6>
              <p>
                Subject to receiving a text message on the mobile phone, you
                have to appear in person at the vaccination center on the
                specified date with the vaccine card, national identity card and
                signed consent form to receive the Covid-19 vaccine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container section__padding">
        <div className="app__download ">
          <div className="row text-center align-items-center">
            <div className="col-sm-6">
              <h6>Download App</h6>
            </div>
            <div className="col-sm-6">
              <img src={googlePlay} alt="GooglePlay" />
            </div>
          </div>
        </div>
      </div>

      <div className="container section__padding mb-5">
        <div className="home__services">
          <div className="home__services-header">
            <h2>Mujib 100</h2>{" "}
          </div>
          <div className=" row home__services-content align-items-end  text-center mt-5">
            <div className="col-sm-4 home__services-content_single p-2">
              <img src={mujib100} className="img-fluid" alt="servicesImage" />
              <h6 className="p-3">Mujib 100 Portal</h6>
            </div>

            <div className="col-sm-4 home__services-content_single p-2">
              <img src={androidapp} className="img-fluid" alt="servicesImage" />
              <h6 className="p-3">Mujib 100 Android App</h6>
            </div>

            <div className="col-sm-4 home__services-content_single p-2">
              <img src={appleapp} className="img-fluid" alt="servicesImage" />
              <h6 className="p-3">Mujib 100 iOS App</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
