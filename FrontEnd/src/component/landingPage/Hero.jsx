import React from "react";

export default function Hero() {
  return (
    <div className="container m-5 d-flex">
      <div className="row">
        <div className="col-6">
          <h1 className=" mt-5 ">Smart Student Management, Simplified</h1>
          <h6 className="mt-2">All-in-One Platform for Schools & Colleges</h6>
          <p className="muted mt-3">
            Streamline attendance, grades, fees, assignments, communication &
            reports in one secure dashboard. Save time, reduce paperwork, and
            focus on what matters — student success.
          </p>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-dark">Watch Demo</button>
          </div>
        </div>
        <div className="col m-5">
          <img
            src="https://i.pinimg.com/736x/c0/cd/3a/c0cd3a4628911be1e2ea5d9251932ef0.jpg"
            alt="img"
            style={{ width: "20rem" }}
          />
        </div>
      </div>
    </div>
  );
}
