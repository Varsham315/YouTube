import './App.css';
import logo from './components/youtube.jpg'
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import "./css/bootstrap.css";
import Search from './components/Search';
import Home from './components/Home';
import Shorts from './components/Shorts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createContext, useState} from 'react';
import Products from './components/Products';
export const store=createContext();
export function App() {
  let StudentData = [
    {
      name:"Tester",
      roll:"1234567890",
      branch:"CSE"
    },
    {
      name:"Tester 2",
      roll:"0987654321",
      branch:"ECE"
    },
    {
      name:"Tester 3",
      roll:"6578493021",
      branch:"EEE"
    }
  ]
  const[data,setData]=useState(StudentData)
  return (
    <>
    <BrowserRouter>
    <store.Provider value={[data,setData]}>
      <div className='container-fluid'>
        <div className='row'>
            <Sidebar/>
          <div className='col-md-8'>
            <Searchbar data={StudentData} />
            <Search/>
            <Products/>
            <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Shorts' element={<Shorts/>}/>
            </Routes>
          </div>
        </div>
      </div>
      </store.Provider>
      </BrowserRouter>
    </> 
  );
}
export default App;