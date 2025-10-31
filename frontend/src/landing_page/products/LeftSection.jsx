import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5" style={{paddingRight:"5px",position:"relative",left:"50px"}}>
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo}  style={{textDecoration:"none"}}>Try demo →</a>
            <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}} >Learn more →</a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} >
              <img src="media/images/appstoreBadge.svg" style={{marginLeft:"20px"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
