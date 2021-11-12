import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        minHeight: "333px",
        backgroundImage: `url(${props.fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: `${props.position}`,
      }}
    ></div>
  );
};

Header.defaultProps = {
  position: "center",
};

export default Header;
