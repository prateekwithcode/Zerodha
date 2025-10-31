import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <h1 className="fs-3 text-muted mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more →
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
