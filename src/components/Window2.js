import React from "react";

//Component for window 2 i.e., Node Js
const Window2 = () => {
  return (
    <div className="main">
      <div className="content_container">
        <h2 className="heading">NodeJs</h2>
        <p className="content">
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser.
        </p>
        <div className="image_container">
          <img
            src="./images/node.png"
            alt="Angular Image"
            className="img_responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Window2;
