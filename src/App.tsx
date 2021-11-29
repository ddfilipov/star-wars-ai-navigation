import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./utils/breakpoints";

const Container = styled.div`
    display: grid;
    grid-template-columns: 300px;
    justify-content: center;
    /* background-color: red; */
    /* border: 1px solid black; */
    row-gap: 10px;
    max-width: 1440px;
    margin: 8rem auto 4rem auto;

    h1 {
        text-align: center;
    }

    div {
        border: 1px solid black;
        /* background-color: chartreuse; */
        align-self: center;
        text-align: center;
        padding: 20px 10px 20px 10px;
        margin: 0 10px 0 10px;
        box-shadow: 0 1px 2px 0 rgba(173, 173, 173, 0.2), 0 1.5px 5px 0 rgba(173, 173, 173, 0.2);
        a {
            display: grid;
            text-decoration: inherit;
        }
    }

    @media only screen and (${device.md}) {
    }
`;

function App() {
    return (
        <Container className="App">
            <h1>Star Wars Database</h1>
            <div>
                <Link to="/people">People</Link>
            </div>
            <div>
                <Link to="/starships">Starships</Link>
            </div>
            <div>
                <Link to="/planets">Planets</Link>
            </div>
        </Container>
    );
}

export default App;
