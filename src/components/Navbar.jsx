import React from "react";
// import { Link } from "react-router-dom";

function Navbar(){
    return(
        <header>
            <div className="container">
            <a href="/">
            <h1>Workout Buddy</h1>
            </a>
            <nav>
                <div>
                    <a href="/login">Login</a>
                    <a href="/signup">Signup</a>
                </div>
            </nav>
            </div>
        </header>
    )
}

export default Navbar;