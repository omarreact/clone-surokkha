import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "../registration/registration.css";

import add__card from "../../assets/Surrokkha Advertisement card.c17bcc5f.jpg";

const data = [
  {
    head: "National ID Card",
    description: `Enter your National Identity Card number and date of birth (according to the National Identity Card) in the form below and click on the "Verify" button. An OTP code will be sent via SMS to the mobile number provided at the time of registration. Then, you can download the Covid-19 Vaccine Certificate.`,
  },
  {
    head: "Birth Reg. Certificate",
    description: `Enter your Birth Certificate number and date of birth (according to the Birth Certificate) in the form below and click on the "Verify" button. An OTP code will be sent via SMS to the mobile number provided at the time of registration. Then, you can download the Covid-19 Vaccine Certificate.`,
  },
  {
    head: "Passport",
    description: `Enter your Passport number and date of birth (according to the Passport) in the form below and click on the "Verify" button. An OTP code will be sent via SMS to the mobile number provided at the time of registration. Then, you can download the Covid-19 Vaccine Certificate.`,
  },
];

function Certificate() {
  const [defultReg, setDefultReg] = useState(true);
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);

  const handleClick1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);
    setDefultReg(false);
  };

  const handleClick2 = () => {
    setShowComponent2(true);
    setShowComponent1(false);
    setShowComponent3(false);
    setDefultReg(false);
  };
  const handleClick3 = () => {
    setShowComponent3(true);
    setShowComponent2(false);
    setShowComponent1(false);
    setDefultReg(false);
  };

  return (
    <div>
      <div className="reg_header_title">
        <div className="container section__padding">
          <div className="row pt-3 pb-3">
            <h3>Certificate</h3>
          </div>
        </div>
      </div>

      <div className="app__reg">
        <div className="container section__padding">
          <div className="row">
            <div className="col-md-3 col-sm-4 app__reg-btn">
              <ListGroup>
                <ListGroup.Item onClick={handleClick1} action href="#link1">
                  National ID Card
                </ListGroup.Item>
                <ListGroup.Item onClick={handleClick2} action href="#link2">
                  Birth Reg. Certificate
                </ListGroup.Item>
                <ListGroup.Item onClick={handleClick3} action href="#link3">
                  Passport
                </ListGroup.Item>
              </ListGroup>
              <div className="app__reg-add_card">
                <img src={add__card} className="img-fluid" alt="addCard" />
              </div>
            </div>
            <div className="col-md-9 col-sm-8 p-4">
              {defultReg && (
                <DefultReg headTitle="PLEASE SELECT THE IDENTICATION OPTION FROM THE MENU" />
              )}
              {showComponent1 && <Component1 />}
              {showComponent2 && <Component2 />}
              {showComponent3 && <Component3 />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DefultReg({ headTitle }) {
  return (
    <>
      <div className="default__reg">
        <h3 className="mb-5">{headTitle} </h3>
        <ol>
          {data.map((data, index) => (
            <li>
              <h5>{data.head}</h5>
              <p>{data.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

function Component1() {
  return <div>National ID Card</div>;
}

function Component2() {
  return <div>Birth Reg. Certificate</div>;
}
function Component3() {
  return <div>Passport</div>;
}

export default Certificate;
