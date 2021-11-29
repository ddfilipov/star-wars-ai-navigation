import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./components/People";
import Starships from "./components/Starships";
import Planets from "./components/Planets";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="people" element={<People />} />
                <Route path="starships" element={<Starships />} />
                <Route path="planets" element={<Planets />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);
