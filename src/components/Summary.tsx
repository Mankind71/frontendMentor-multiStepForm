import React from 'react'
import "../scss/summary.scss";

const Summary = () => {
  return (
    <main>
      <h1 className="title">Select your plan</h1>
      <p className="desc">You have the option of monthly or yearly billing.</p>
      <section className="cardCompCon">
        <CardComp title="Arcade (Monthly)" desc="Change" cost="$9/mo" />
        <hr />
        <CardComp desc="Arcade" cost="$1/mo" />
        <CardComp desc="Arcade" cost="$2/mo" />
      </section>
      <CardComp desc="Total (per month)" cost="$12/mo" />
    </main>
  );
};

const CardComp = ({ title='', desc, cost }) => {
  return (
    <section className="addOnCard">
      <section>
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
      <p>{cost}</p>
    </section>
  );
};

export default Summary