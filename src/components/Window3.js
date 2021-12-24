import React from "react";

//Component for window 2 i.e., Angular Js

const Window3 = () => {
  return (
    <div className="main">
      <div className="content_container">
        <h2 className="heading">AngularJS</h2>
        <p className="content">
          AngularJS is a JavaScript-based open-source front-end web framework
          for developing single-page applications. It is maintained mainly by
          Google and a community of individuals and corporations.
        </p>
        <div className="image_container">
          <img
            src="./images/angular.png"
            alt="Angular Image"
            className="img_responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Window3;
