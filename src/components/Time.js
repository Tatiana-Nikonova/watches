import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Clock from "./Clock";
import '../App.css';
import ClockModel from "../model/ClockModel";

function Time() {
    const [clocks, setClocks] = useState([]);
    const [form, setForm] = useState({city: '', offset: ''});

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!form.city || !form.offset) return;
        setClocks(prevClocks => {
            const arr = prevClocks.slice();
            const id = uuidv4();
            arr.push(new ClockModel(id, form.city, form.offset));
            setForm({city: '', offset: ''});
            return [...arr];
        });
    }


    const handleRemove = id => {
        setClocks(prevClocks => prevClocks.filter(o => o.id !== id));
    };

    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };


    return (
        <div className={"main"}>
            <form onSubmit={handleSubmit}>
            <div className={"first"}>
                <label className={"first-label"}>Название</label>
                <label className={"first-label"}>Временная зона</label>
            </div>
            <div className={"header"}>
                <input name={"city"} className={"text"} type={"text"} value={form.city} onChange={handleChange}/>
                <input name={"offset"} className={"text"} type={"number"} value={form.offset} onChange={handleChange}/>
                <input className={"text"} type={"submit"} value={"Добавить"}/>
            </div>
            </form>
            {clocks.map(element => (
                <Clock key={element.id} city={element.city} offset={element.offset} callback={()=>handleRemove(element.id)}/>
            ))}
        </div>
    )
}

export default Time;