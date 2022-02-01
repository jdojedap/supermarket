import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CoursesPage from './Productos/MarketPage';
import TeachersPage from './Market/MarketPage';
import TeacherCreate from './Market/MarketCreate';
import TeacherUpdate from './Market/MarketUpdate';
import Course from './Productos/Market';
import Navbar from "./components/Navbar";

function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/courses" element={ <CoursesPage />   }/>         
        <Route path="/course" element={ <Course />   }/>                 
        <Route path="/createteacher" element={ <TeacherCreate />   }/>   
        <Route path="/updateteacher/:teacherId" element={ <TeacherUpdate />   }/>   
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;