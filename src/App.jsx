import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./Pages/Movies";
import MovieInformation from "./Pages/MovieInformation";
import Actors from "./Pages/Actors";
import Profile from "./Pages/Profile";
import Navbar from "./Main Components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow">
        <Sidebar />
        
        <div className="flex flex-col">
        <Navbar />
          <main className="h-max text-[#ffffff] bg-[#161616]">
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>

      <Footer />
      
    </div>
  );
};

export default App;
