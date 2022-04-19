import Column from "./Column";
import "./App.css";


const App=()=> {
  return (
    <div className="App">
      <div id="id1">
      <h1>John Doe</h1>
      </div>
      <div class="c1">
      <Column title="Summary" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
      <div class="c1">
      <Column title="Experience" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
      <div class="c1">   
      <Column title="Contact" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
    </div>
  );
}

export default App;
