import React, { useEffect, useState } from "react";
import axios from 'axios';
function CheckboxUniv() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const key = '6MedrPxHamuW5yCuaM4QV4e7Ym2kLKfkHvKK5bVdDX1YCalc';

    useEffect(() => {
        axios.get('http://6medapi.imobisoft.uk/api/Questionnaire/GetAllUniversities', {
            headers: {
                'APIKey': `${key}`
            }
        }).then((response) => {

            // const univ = response.data.json();
            setItems(response.data.result);
            // console.log(items.result);
        });
        // async function getData(url = '', data = {}) {
        //     const response = await fetch(url, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'APIKey': '6MedrPxHamuW5yCuaM4QV4e7Ym2kLKfkHvKK5bVdDX1YCalc'
        //         },
        //     });
        //     const univ = await response.json();
        //     setItems(univ.result);
        //     console.log(items);
        // }
        // getData('http://6medapi.imobisoft.uk/api/Questionnaire/GetAllUniversities')
        // .then(data => {
        //     });

    }, [])
    return (
        <ul>
            {items.map(item => (
                <li key={item.universityId}>
                    {item.universityName}
                </li>
            ))}
        </ul>
    );
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (isLoaded) {
    //     return <div>Loading hello...</div>;
    // } else {
    // }
}

export default CheckboxUniv;