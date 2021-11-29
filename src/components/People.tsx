import axios from "axios";
import { useEffect, useState } from "react";

type PersonType = {
    name: string;
    height: number;
    gender: string;
};

const baseURL = "https://swapi.dev/api/";

export default function People() {
    const [person, setPerson] = useState<PersonType>();

    useEffect(() => {
        axios.get(`${baseURL}/people/1`).then((response) => {
            setPerson(response.data);
        });
    }, [person]);

    if (!person) return null;

    return (
        <div>
            <span>Name: {person.name}</span>
            <span>Name: {person.height}</span>
            <span>Name: {person.gender}</span>
        </div>
    );
}
