import React, { useState } from "react";
import background from "./bg.jpg";
import "./demo.scss";
import { ReactComponent as CustomerService } from "./CustomerService.svg";

const Demo: React.FC = () => {
  const [method, setMethod] = useState(0);
  if (method == 0) {
    return (
      <div className="demo">
        <img src={background} alt="background" className="demo__bg" />

        <div className="demo__methods">
          <div
            className="demo__case"
            onClick={() => {
              setMethod(1);
            }}
          >
            <CustomerService />
          </div>
          <div
            className="demo__case"
            onClick={() => {
              setMethod(2);
            }}
          >
            2
          </div>
          <div
            className="demo__case"
            onClick={() => {
              setMethod(3);
            }}
          >
            3
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Demo;
