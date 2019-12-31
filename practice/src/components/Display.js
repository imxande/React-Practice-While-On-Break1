import React, {useState} from 'react';
import {specials} from '../data';
import {numbers} from '../data';
import {operators} from '../data';
import {Specials} from './Specials';

export const Display= () =>{
    const [display, setDisplay] = useState(0);
    const [specialChar, setspecialChar] = useState(specials)
    const [numberChar, setNumberChar] = useState(numbers)
    const [operatorChar, setOperatorChar] = useState(operators.value)
 
    return(
        <div>
            <h2>{display}</h2>
            <Specials specialChar = {specialChar}/>
            
        </div>
    )
}

