import React, {useState, useEffect} from 'react';
import {getHours, getMinutes} from '../function/time';
import '../App.css';

function Clock({city, offset, callback}) {
    const date = new Date();
    const [second, setSecond] = useState(date.getSeconds());
    let hour = getHours(date, offset);
    let minute = getMinutes(date);

    const seconds = () => setTimeout(() => {
       setSecond(prevSecond=> {
           prevSecond = new Date().getSeconds();
           if (prevSecond < 10) {
               return '0' + prevSecond;
           }
           if (prevSecond === 60) {
               return '00';
           }
           return prevSecond;
       })
    }, 1000);


    useEffect(() => {

        seconds();

    }, [second]);


    return (
        <div className={"caption"}>
            <h5 className={"city"}>{city}</h5>
            <div className={"time-component"}>
                <button className={"close"} onClick={() => callback()}>X</button>
                <div id="time">
                    <span id="hour">{hour}</span>
                    <span id="minute">:{minute}</span>
                    <span id="second">:{second}</span>
                </div>
            </div>
        </div>
    )
}

export default Clock;