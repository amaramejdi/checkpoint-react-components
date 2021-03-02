import "./App.css";
import Adress from "./components/Adress";
import FullName from "./components/FullName";
import ProfilPhoto from "./components/ProfilPhoto";

function App() {
  let adress = "Avenue 14 Janvier";
  let myname = "Majdi Amara";
  const alertMe = () => {
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="head">
        <h1>Hello from Checkpoint react components</h1>
        </div>

        <FullName myname={myname} />
        <Adress adress={adress}/>
        <ProfilPhoto></ProfilPhoto>
      </header>
    </div>
  );
}

export default App;
