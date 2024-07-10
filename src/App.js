import React from 'react';
import './App.css';
// import Header from './components/Navbar/Header'
// import LandingPage from './components/User/LandingPageUser'
// import TextUser from './components/User/TextUser'
// import News from './components/User/Berita'
// import FormUser from './components/User/FormUser'
// import MapComponent from './components/User/Map'
// import NavbarRoute from './Router/Router'
import Dashboard from './components/Admin/DashboardAdmin'

const App = () => {
  return (
    <div className="App">
      {/* <div>
        <Header/>
      </div>
      <div>
        <NavbarRoute/>
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
      <div>
        <MapComponent />
      </div>
      <div>
        <FormUser />
      </div> */}
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}



export default App;
