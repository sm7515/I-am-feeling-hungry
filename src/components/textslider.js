import React, {useEffect } from 'react';

export default function TextSlider({hover}) {

    const array = ['Fajitas', 'Biscuits n gravy', 'California roll', 'Mac n cheese','Fortune cookies',
        'Peanut butter sandwich', 'chicken and waffles', 'Chocolate-chip cookies', 'Cheeseburger','Philly cheese steak',
        'Nachos'];

    return(
        <div className={hover ?'show-texts':"hide-texts"}>
            {useEffect(()=>{
                array.map((i)=><p className='randomFood'>{i}</p>)
            })}
        </div>
    )
}