import React from "react";

export default function featureCards({ LinkIcon, title, desc }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col"
          style={{
            width: "100%",
            border: "2px solid #ededed",
            borderRadius: "20px",
          }}
        >
          <i class={LinkIcon}></i>
          <h6>{title}</h6>
          <p className="muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}
