import React, {useState} from 'react';
import {specials} from '../data';
import {numbers} from '../data';
import {operators} from '../data';

export const Display= () =>{
    const [display, setDisplay] = useState(0);
    const [specialChar, setspecialChar] = useState(specials)
    const [numberChar, setNumberChar] = useState(numbers)
    const [operatorChar, setOperatorChar] = useState(operators.value)
    console.log(specials); 
    console.log(numbers); 
    console.log(operators); 
    
    return(
        <div>
            <h2>{display}</h2>
            
        </div>
    )
}

