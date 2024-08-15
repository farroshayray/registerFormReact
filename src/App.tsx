import "./App.css";
import { useState } from "react";
import Login from "./Login";
import GreetingRevou from "./GreetingRevou";
import NavBar from "./NavBar";
import FooterContainer from "./FooterContainer";
import RegisterBtn from "./RegisterBtn";
import RegisterStep1 from "./Register/RegisterStep1";

function App() {
  const name = "SpaceBin";
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(true);
  const [showRegisterStep1, setShowRegisterStep1] = useState(false);
  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowRegisterStep1(true);
  }
  return (
    <div className="App">
      <NavBar />
      <GreetingRevou name={name}/>
      {showLogin && <Login />}
      {showRegister && <RegisterBtn onRegisterClick={handleRegisterClick}/>}
      {showRegisterStep1 && <RegisterStep1 />}
      <FooterContainer />
    </div>
  );
}

export default App;
