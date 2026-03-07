import React from "react";

export default function Cards({ title, LinkImg, desc}) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col center m-2 p-2"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #ededed",
            borderRadius: "20px",
          }}
        >
          <img
            src={LinkImg}
            alt="img"
            style={{
              width: "100%",
              border: "2px solid #ededed",
              borderRadius: "20px",
            }}
          />
          <h5>{title}</h5>
          <p className="muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}
