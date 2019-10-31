import React, { useState } from 'react';

export default function Ingredients({ data }) {
    return (
        <div className="ingreInfo">
            {data.map((i)=>
                <div className="ingre">
                    <img className='imgIngre' src={`https://spoonacular.com/cdn/ingredients_100x100/${i.image}`}></img>
                    <p ><span className='ingrename'>{i.name} </span><br></br>
                    {i.amount.metric.value} {i.amount.metric.unit}</p>
                </div>
            )}
        </div>
    )
}