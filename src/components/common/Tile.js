import React from "react";

const Content = ({title, description}) => {
  return (
    <div className="tile__content">
      <div>{ title }</div>
      <div className="tile__description">{ description }</div>
    </div>
  );
};

const Tile = ({title, description, OnClick, href}) => {
  const hasButtonRole = !!OnClick && typeof OnClick === "function";

  if(href) {
    return (
      <a className="tile" href={href} target="_blank">
        <Content title={title} description={description} />
      </a>
    );
  } else {
    return (
      <div className="tile" role={hasButtonRole ? "button" : undefined} onClick={OnClick}>
        <Content title={title} description={description} />
      </div>
    );
  }
};

export default Tile;
