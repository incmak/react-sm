import React, { useEffect, useState } from "react";

function CheckboxUniv() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        async function getData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'APIKey': '6MedrPxHamuW5yCuaM4QV4e7Ym2kLKfkHvKK5bVdDX1YCalc'
                },
            });
            const univ = await response.json();
            setItems(univ.result)
        }
        getData('http://6medapi.imobisoft.uk/api/Questionnaire/GetAllUniversities')
            .then(data => {
            });

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
        return <div>Loading hello...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.universityId}>
                        {item.universityName}
                    </li>
                ))}
            </ul>
        );
    }
}

export default CheckboxUniv;