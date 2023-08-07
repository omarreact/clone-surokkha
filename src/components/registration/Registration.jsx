import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./registration.css";

// import DefultReg from "./defultReg";

import add__card from "../../assets/Surrokkha Advertisement card.c17bcc5f.jpg";

const data = [
  {
    head: "National ID Card",
    description:
      "Complete the registration by verifying your national identity card and mobile number in the form. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone.",
  },
  {
    head: "Birth Reg. Certificate",
    description:
      "Complete the registration by verifying your birth certificate number and mobile number in the form. To get registered for the  vaccination, you must provide your 17 digit Birth Registration     Certificate number. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone.",
  },
  {
    head: "Passport",
    description:
      "Complete the registration by verifying your passport and mobile number in the form. Remember, registering a vaccine with a passport will not work for everyone right now. According to the decision of the Government of Bangladesh, foreign nationals      working in various foreign companies can register with these      passport numbers only after the Ministry of Foreign Affairs and the foreign workers registered in BMET are whitelisted on      “Surokkha” server. Please be patient for some time to complete this process. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone.",
  },
];

function Registration() {
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
            <h3>Vaccine Registration</h3>
          </div>
        </div>
      </div>

      <div className="app__reg">
        <div className="container section__padding">
          <div className="row">
            <div className="col-md-3 col-sm-4 app__reg-btn">
              <ListGroup>
                <ListGroup.Item onClick={handleClick1} action href>
                  National ID Card
                </ListGroup.Item>
                <ListGroup.Item onClick={handleClick2} action href>
                  Birth Reg. Certificate
                </ListGroup.Item>
                <ListGroup.Item onClick={handleClick3} action href>
                  Passport
                </ListGroup.Item>
              </ListGroup>
              <div className="app__reg-add_card">
                <img src={add__card} className="img-fluid" alt="addCard" />
              </div>
            </div>
            <div className="col-md-9 col-sm-8 p-4">
              {defultReg && (
                <DefultReg headTitle="PLEASE SELECT THE IDENTIFICATION OPTION FROM THE MENU" />
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

export default Registration;
