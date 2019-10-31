import React, { useState } from 'react';

export default function Step({data}){
    const steparray=[];
    let [hover, setHover] = useState(false);
    // console.log(data)
    // console.log(data.length)
    let k=0;
    if(data.length>0){
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].steps.length; j++) {
                steparray[k] = data[i].steps[j].step;
                k++;
            }
        }
    }
    
    // console.log(steparray);
    // console.log(steparray.length);

    return(
        <ol>
            {steparray.map((i, key) => <li><span className='number' id={hover?'hoverNum':''}>{key+1}</span>
                <span onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} className="text">{i}</span></li>)}
        </ol>
    )
}
