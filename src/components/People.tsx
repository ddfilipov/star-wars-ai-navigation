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
    // const [people, setPeople] = useState<PersonType[]>([]);

    useEffect(() => {
        axios.get(`${baseURL}/people/1`).then((response) => {
            setPerson(response.data);
            console.log(response.data);
        });
    }, []);

    if (!person) return null;

    return (
        <div>
            {/* {people.map((persona) => ( */}
            <ul>
                <li>Name: {person.name}</li>
                <li>Height: {person.height}</li>
                <li>Gender: {person.gender}</li>
            </ul>
            {/* ))} */}
        </div>
    );
}
