import React from "react";

export default function Hero() {
  return (
    <div className="container d-flex align-items-center min-vh-100">
      <div className="row align-items-center">
        
        <div className="col-md-6">
          <h1 className="mt-3">Smart Student Management, Simplified</h1>

          <h6 className="mt-4">
            All-in-One Platform for Schools & Colleges
          </h6>

          <p className="text-muted mt-3">
            Streamline attendance, grades, fees, assignments, communication &
            reports in one secure dashboard. Save time, reduce paperwork, and
            focus on what matters — student success.
          </p>

          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-dark">Watch Demo</button>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://i.pinimg.com/736x/c0/cd/3a/c0cd3a4628911be1e2ea5d9251932ef0.jpg"
            alt="hero"
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}