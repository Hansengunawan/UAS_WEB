import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './components/Login/Login'
import DataInsiden from './components/User/DataInsiden'
import NewsLayout from './components/User/DetailBerita'
import NewsLayout2 from './components/User/DetailBerita2'
import NewsLayout3 from './components/User/DetailBerita3'
import Dashboard from './components/Admin/DashboardAdmin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FormUser from './components/User/FormUser'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route path="/data-insiden" element={ <DataInsiden/> }></Route>
        <Route path="/login-admin" element={ <Login/> }></Route>
        <Route path="/detail-berita" element={ <NewsLayout/> }></Route>
        <Route path="/detail-berita2" element={ <NewsLayout2/> }></Route>
        <Route path="/detail-berita3" element={ <NewsLayout3/> }></Route>
        <Route path="/dashboard-admin" element={ <Dashboard/> }></Route>
        <Route path="/form-user" element={ <FormUser/> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
