import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

type PersonType = {
    name: string;
    height: number;
    gender: string;
};

const client = axios.create({
    baseURL: "https://swapi.dev/api/",
});

const Container = styled.div`
    display: grid;
    grid-template-columns: 300px;
    justify-content: center;
    text-align: center;
    row-gap: 10px;

    a {
        display: block;
        border: 1px solid black;
        padding: 20px 10px 20px 10px;
    }
`;

export default function People() {
    const [people, setPeople] = useState<PersonType[]>([]);

    useEffect(() => {
        async function getPeople() {
            const response = await client.get("people/");
            console.log(response.data.results);
            setPeople(response.data.results);
        }
        getPeople();
    }, []);

    if (!people) return null;

    return (
        <Container>
            <h2>People</h2>
            {people.map((persona) => (
                <a>{persona.name}</a>
            ))}
        </Container>
    );
}
