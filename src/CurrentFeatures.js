import React from "react";
import "./CurrentFeatures.css";
import "bootstrap/dist/css/bootstrap.css";

export default function CurrentFeatures() {
  return (
    <div className="CurrentFeatures">
      <div className="row">
        <div className="col-9" float-right>
          <ul className="float-right">
            <li>
              {" "}
              <span> Humidity: 10 </span> %
            </li>
            <li>
              Wind: 5 <span> </span> km/h
            </li>
          </ul>
          <span className="clock" float-right></span>
        </div>
      </div>
    </div>
  );
}
