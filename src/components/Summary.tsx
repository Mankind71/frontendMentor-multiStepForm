import React from "react";
import "../scss/summary.scss";

const Summary = () => {
  return (
    <main className="summary">
      <h1 className="title">Finishing up</h1>
      <p className="desc">Double-check everything looks OK before confirming</p>
      <section className="cardCompCon">
        <section className="addOnCard">
          <div>
            <h2>Arcade (Monthly)</h2>
            <p className="change">Change</p>
          </div>
          <h6>$9/mo</h6>
        </section>
        <hr />
        <section className="addOnCard">
          <p>Online service</p>
          <h6>+$1/mo</h6>
        </section>
        <section className="addOnCard">
          <p>Larger storage</p>
          <h6>+$2/mo</h6>
        </section>
      </section>
      <section className=" total addOnCard">
        <p>Total (per month)</p>
        <div className="totalCost">+$12/mo</div>
      </section>
    </main>
  );
};

export default Summary;