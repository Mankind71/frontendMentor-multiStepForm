import React from "react";
import "../scss/addOn.scss";

const AddOns = () => {
  return (
    <main className="addOns">
      <h1 className="title">Pick add-ons</h1>
      <p className="desc">Add-ons helps enhance your gaming experience.</p>
      <section className="cardCompCon">
        <CardComp
          className=""
          title="Online service"
          desc="Access to multiplayer games"
          cost="$1/mo"
        />
        <CardComp
          className=""
          title="Larger storage"
          desc="Extra 1TB of cloud save"
          cost="$2/mo"
        />
        <CardComp
          className="active"
          title="Customizable profile"
          desc="Custom theme on your profile"
          cost="$2/mo"
        />
      </section>
    </main>
  );
};

const CardComp = ({ className, title, desc, cost }) => {
  return (
    <section className={`addOnCard ${className}`}>
      <input type="checkbox" className="" name="checkbox" id="" />
      <section>
        <h2 className="">{title}</h2>
        <p className="cardDesc">{desc}</p>
      </section>
      <p className="cost">{cost}</p>
    </section>
  );
};

export default AddOns;
