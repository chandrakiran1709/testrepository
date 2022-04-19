import './App.css';
import Contact from './Contact';
import Experience from './Experience';
import Summary from './Summary';

function App() {
  return (
    <div className="App">
      <h1>John Doe</h1>
      <img src={require('./Sample_User_Icon.png')}/><br/>
      <Summary/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
