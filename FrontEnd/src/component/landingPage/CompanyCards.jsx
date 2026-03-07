import React from "react";
import Cards from "./Cards";

export default function CompanyCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ display: "flex" }}>

          <Cards title="500+ Schools & University" 
          LinkImg="https://i.pinimg.com/1200x/be/d4/5b/bed45b1b8a919730abe231a4390e443b.jpg" 
          />

          <Cards
            title="2 Lakh+ Students Managed"
            LinkImg="https://i.pinimg.com/736x/ba/d6/dd/bad6dd0c5830a69c0439ea3a80bd8ee4.jpg"
          />

          <Cards 
          title="95% Time Saved on Admin Work" 
          LinkImg="https://i.pinimg.com/736x/e1/a3/9f/e1a39f35fae5570cb45f7587068d87bd.jpg"
          />
          <Cards 
          title="100 Data Secure (GDPR like)"
          LinkImg="https://i.pinimg.com/736x/66/02/68/660268df52e603c798f1291f6b09110c.jpg"
          />
          <Cards 
          title="Setup & Training"
          LinkImg="https://i.pinimg.com/736x/ea/fd/73/eafd73c10c51ebeb3d5c70da7da17730.jpg"
          />
        </div>
      </div>
    </div>
  );
}
