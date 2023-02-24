import React from "react";
import "../scss/selectPlan.scss";
import arcade from "../assets/images/icon-arcade.svg";

const SelectPlan = () => {
  return (
    <main>
      <h1 className="title">Select your plan</h1>
      <p className="desc">You have the option of monthly or yearly billing.</p>
      <section className="cardCompCon">
        <CardComp img={arcade} plan="Arcade" cost="$9/mo" />
        <CardComp img={arcade} plan="Arcade" cost="$9/mo" />
        <CardComp img={arcade} plan="Arcade" cost="$9/mo" />
      </section>
      <section className="period">
        <div>Monthly</div>
        <div className="button">
          <div className="circle"></div>
        </div>
        <div>Yearly</div>
      </section>
    </main>
  );
};

const CardComp = ({ img, plan, cost }) => {
  return (
    <section className="planCard">
      <img src={img} height={50} width="auto" alt="" />

      <section>
        <h2>{plan}</h2>
        <p>{cost}</p>
      </section>
    </section>
  );
};

export default SelectPlan;
