import React from 'react';


export const Specials = (props) =>{
    
    return(
        <div>
            <h3>Special Component</h3>
           {props.specialChar.map((item) => {
               return item; 
           })}  
             
        </div>
      
    )
}