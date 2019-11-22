import React from "react";
import {useState, useEffect} from "react";
import {createRef} from "react"
import DisplaySearchResults from '../components/search'

export default function Home() {
    let [food, setFood]=useState("");
    let [placehold, setPlaceHold] = useState("Fajitas");
    let foodName=createRef();
    let [enter, setEnter]=useState(false);

    function handleChange() {
        setFood(foodName.current.value);
    }

    const handleKeyUp =(e)=> {
        if (e.keyCode === 13) {
            setEnter(true)
        }
    }

    const foodarray = ['Biscuits n gravy', 'California roll', 'Mac n cheese', 'Fortune cookies', 'Chicken and Waffles', 'Cheeseburger', 'Philly cheese steak',
        'Nachos'];

    useEffect(() => {
        let count = 0;
        setInterval(() => {
            if (count === foodarray.length) {
                count = 0;
            }
            setPlaceHold(foodarray[count]);
            count++;
        }, 500);
    }, [])

    return (
        <div className={enter ? "container-after" :"container home"}>
            <input className={enter?"input-box-after":"input-box"} ref={foodName} onChange={handleChange} 
                onKeyUp={handleKeyUp} placeholder={placehold}></input>
            <span className={enter?"bar-after":"inputbar"}></span>
            <a href="random-recipe" className={enter?"random-link-after":"random-link"}>surprise me</a>
            <h2 className={enter?"input-h2-after":"input-h2"}>{food}</h2>
            {enter?<DisplaySearchResults foodname={food} />:""}
        </div>
    )
}