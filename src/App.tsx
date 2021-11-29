import React from "react";
import "./App.css";
import { Link } from "react-router-dom";



function App() {
    return (
        <div className="App">
            <div>
                <Link to="/people">People</Link>
            </div>
            <div>
                <Link to="/starships">Starships</Link>
            </div>
            <div>
                <Link to="/planets">Planets</Link>
            </div>
        </div>
    );
}

export default App;
