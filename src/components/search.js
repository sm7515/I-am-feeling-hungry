import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function DisplaySearchResults({ foodname }) {

    const getSerchResult=()=>{
        axios.get(`https://api.spoonacular.com/recipes/search?query=${foodname}?apiKey=ce67055e24114f90a2ede346b6d5dcef`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        console.log(foodname);
        getSerchResult();
    }, [foodname])

    return (
        <div className="">

        </div>
    )
}