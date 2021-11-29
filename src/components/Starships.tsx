import axios from "axios";
import { useEffect, useState } from "react";

type PersonType = {
    name: string;
    height: number;
    gender: string;
};

const baseURL = "https://swapi.dev/api/";

export default function Starships(){
    // const [person, setPerson] = useState<PersonType>();

    // useEffect(() => {
    //     axios.get(`${baseURL}/people/1`).then((response) => {
    //         setPerson(response.data);
    //     });
    // }, [person]);

    // if (!person) return null;

    return (
        <div>
            <span>Starships</span>
        </div>
    );
};

