import AddOns from "./components/AddOns";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Summary from "./components/Summary";
import "./scss/app.scss";
import thanks from "./assets/images/icon-thank-you.svg";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  console.log(index);

  const handleClick = () => {
    setIndex(index+1);
  }
  
  return (
    <section className="App">
      <section className="content">
        <section className="levels">
          <div className="itemsContainer">
            <div className="items active">
              <div className="numCon">1</div>
              <div className="details">
                <p className="step">STEP 1</p>
                <p className="title">YOUR INFO</p>
              </div>
            </div>
            <div className="items">
              <div className="numCon">2</div>
              <div className="details">
                <p className="step">STEP 2</p>
                <p className="title">SELECT PLAN</p>
              </div>
            </div>
            <div className="items">
              <div className="numCon">3</div>
              <div className="details">
                <p className="step">STEP 3</p>
                <p className="title">ADD-ONS</p>
              </div>
            </div>
            <div className="items">
              <div className="numCon">4</div>
              <div className="details">
                <p className="step">STEP 4</p>
                <p className="title">SUMMARY</p>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          {index < 4 ? (
            <>
              <section className="details">
                {index === 0 && <PersonalInfo />}
                {index === 1 && <SelectPlan />}
                {index === 2 && <AddOns />}
                {index === 3 && <Summary />}
              </section>
              <footer>
                <div>
                  <button className="back" onClick={()=>{setIndex(index-1)}}>Go back</button>
                  <button onClick={handleClick} className="next">
                    Next Step
                  </button>
                </div>
              </footer>
            </>
          ) : (
            <section className="d-flex flex-direction-column align-items-center justify-content-center">
              <img src={thanks} alt="thanks" width={50} />
              <h1>Thank you!</h1>
              <p>Thanks for confirming</p>
            </section>
          )}
        </section>
      </section>
    </section>
  );
}

export default App;
