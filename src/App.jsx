import React from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";


function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <div className="pages">
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup/>}
          />
      </div>

    </BrowserRouter>
    // <div>
    //   <Navbar />
    //   <div className="pages">
    //   <Home />
    //   <Login/>
    //   <Signup/>
    //   </div>
    // </div>

  );
}
export default App;