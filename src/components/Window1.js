import React from "react";

//Component for window 1 i.e., React Js
const Window1 = () => {
  return (
    <div className="main">
      <div className="content_container">
        <h2 className="heading">ReactJs</h2>
        <p className="content">
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on UI components. It is maintained by
          Meta and a community of individual developers and companies. React can
          be used as a base in the development of single-page or mobile
          applications.
        </p>
        <div className="image_container">
          <img
            src="./images/react.png"
            alt="Angular Image"
            className="img_responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Window1;
