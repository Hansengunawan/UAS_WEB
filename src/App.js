import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header'
import LandingPage from './components/LandingPageUser'
import TextUser from './components/TextUser'
import News from './components/Berita'
// import Maps from './components/Map'
import FormUser from './components/FormUser'
import Login from './components/Login'

// import Hero from './components/Hero';
// import VisionMission from './components/VisionMission';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <div>
        <Header  />
      </div>
      <div>
        <NavigationBar  />
      </div>
      <div>
        <LandingPage />
      </div>
      <div>
        <TextUser />
      </div>
      <div>
        <News />
      </div>
      {/* <div>
        <Maps />
      </div> */}
      <div>
        <FormUser />
      </div>


      <div>
        <Login/>
      </div>


    </div>
  );
}

export default App;
