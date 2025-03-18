//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from 'react-router-dom';
import Food from './components/Food';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import FoodList from './components/FoodList';
import SearchFood from './components/SearchFood';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NavClient from './components/NavClient';
import AddOrder from './components/AddOrder';
import Billing from './components/Billing';
function App() {
  return (
    <div className="App">
      <h2>FOOD APP</h2>
      {/* <Nav /> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/login" element={<Login/>}/>
        <Route path="/navclient" element={<NavClient/>}/>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/addorder" element={<AddOrder/>}/>
        <Route path="/flist" element={<FoodList />} />
        <Route path="/sfood" element={<SearchFood />} />
        <Route path="/food" element={<Food/>}>
          <Route path="afood" element={<AddFood />} />
          <Route path="dfood" element={<DeleteFood />} />
          <Route path="ufood" element={<UpdateFood />} />
        </Route>
        {/* <Route path="/s" element={<SearchFood/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
