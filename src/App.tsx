import PersonalInfo from "./components/PersonalInfo";
import "./scss/app.scss"

function App() {
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
          <section className="details">
            <PersonalInfo />
          </section>
          <footer>
            <div>
              <button className="back">Go back</button>
              <button className="next">Next Step</button>
            </div>
          </footer>
        </section>
      </section>
    </section>
  );
}

export default App;
