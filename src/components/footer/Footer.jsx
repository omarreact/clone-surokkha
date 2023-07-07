import React from "react";
import logo_white from "../../assets/logo_white.svg";
import footer__img1 from "../../assets/ict.52410752.png";
import footer__img2 from "../../assets/org.ed08c793.png";
import "./footer.css";
import ListGroup from "react-bootstrap/ListGroup";

function Footer() {
  return (
    <footer className="su-main-footer-area no-print">
      <div className="container mt-5 section__padding">
        <div className="row text-left">
          <div className="col-12 col-md-2 su-footer-logo mb-3">
            <img src={logo_white} alt="Surokkha" />
          </div>
          <div className="col-12 col-md-2">
            <ul className="list-footer text-small mb-5">
              <li>
                <a className="footer-link" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="footer-link" href="/help">
                  Manual
                </a>
              </li>
              <li>
                <a className="footer-link" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="footer-link" href="/terms-of-service">
                  Terms of service
                </a>
              </li>
              <li>
                <a className="footer-link" href="/affiliates">
                  Other Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-12 col-md-4 su-footer-l-col"
            style={{ color: "#fff", fontSize: "14px", fontWeight: "700" }}
          >
            <p>Developed by - Department of ICT &nbsp;</p>
            <img alt="" className="img-fluid" src={footer__img1} />
          </div>
          <div
            className="col-12 col-md-4 pt-5 pt-md-0 su-footer-r-col"
            style={{ color: "#fff", fontSize: "14px", fontWeight: "700" }}
          >
            <p>Affiliates -&nbsp;</p>
            <img alt="" className="img-fluid" src={footer__img2} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
