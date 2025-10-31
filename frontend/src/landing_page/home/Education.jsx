import React from "react";

function Education() {
  return (
    <div className="container mt-3 p-5 ">
      <div className="row p-5">
        <div className="col-6" style={{position:"relative",right:"45px",top:"-16px"}}>
          <img src="media/images/education.svg" style={{width:"90%"}}/>
        </div>

        <div className="col-6">
          <h3 className="mb-4">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
