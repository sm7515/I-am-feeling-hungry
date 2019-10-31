import React, {useState,useEffect } from 'react';

export default function TextSlider({hover}) {

    const foodarray = [ 'Biscuits n gravy', 'California roll', 'Mac n cheese','Fortune cookies',
        'Peanut butter sandwich', 'chicken and waffles', 'Chocolate-chip cookies', 'Cheeseburger','Philly cheese steak',
        'Nachos'];

    const [food, setFood] = useState('Fajitas');
    useEffect(()=>{
    let count = 0;
    setInterval(() => {
        if (count === foodarray.length) {
            count = 0;
        }
        setFood(foodarray[count]);
        count++;
        // console.log("hiiiii"+food);
    }, 500);
},[])
    return(
        <div className={hover ?'show-texts':"hide-texts"}>
            {food}        
        </div>
    )
}