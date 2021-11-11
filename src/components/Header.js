import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        minHeight: "333px",
        backgroundImage: `url(${props.fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Header;
