import React from 'react'
import "../scss/addOn.scss";

const AddOns = () => {
  return (
    <main>
      <h1 className="title">Select your plan</h1>
      <p className="desc">You have the option of monthly or yearly billing.</p>
      <section className="cardCompCon">
        <CardComp title="Arcade" desc="Arcade" cost="$9/mo" />
        <CardComp title="Arcade" desc="Arcade" cost="$9/mo" />
        <CardComp title="Arcade" desc="Arcade" cost="$9/mo" />
      </section>
    </main>
  );
};

const CardComp = ({ title, desc, cost }) => {
  return (
    <section className="addOnCard">
      <input type="checkbox" className='checkBox' name="" id="" />
      <section>
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
      <p>{cost}</p>
    </section>
  );
};

export default AddOns