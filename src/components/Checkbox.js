import React, { useEffect, useState } from "react";
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


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
            setItems(response.data.result);
        });
    }, [])
    return (
        <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={items}
      disableCloseOnSelect
      getOptionLabel={(option) => option.universityName}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.universityName}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Select University" placeholder="University" />
      )}
    />
        // <ul>
        //     {items.map(item => (
        //         <li key={item.universityId}>
        //             {item.universityName}
        //         </li>
        //     ))}
        // </ul>
    );
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (isLoaded) {
    //     return <div>Loading hello...</div>;
    // } else {
    // }
}

export default CheckboxUniv;