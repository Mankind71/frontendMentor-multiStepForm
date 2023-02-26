import React from "react";
import "../scss/selectPlan.scss";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"

const SelectPlan = () => {
  return (
    <main className="selectPlan">
      <h1 className="title">Select your plan</h1>
      <p className="desc">You have the option of monthly or yearly billing.</p>
      <section className="cardCompCon">
        <CardComp img={arcade} plan="Arcade" cost="$9/mo" />
        <CardComp img={advanced} plan="Advanced" cost="$12/mo" />
        <CardComp img={pro} plan="Pro" cost="$15/mo" />
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
      <img src={img} alt="" />

      <section>
        <h2>{plan}</h2>
        <p>{cost}</p>
      </section>
    </section>
  );
};

export default SelectPlan;
