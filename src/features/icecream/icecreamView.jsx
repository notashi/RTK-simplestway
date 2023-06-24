import React from "react";
import { useSelector, } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";


const IcecreamView =()=>{
    const [value,setValue] =useState(1)
const numOfIcecreams = useSelector((state)=>state.icecream.numOfIcecreams)
const dispatch = useDispatch()    
return(
        <div>
        <h2>Numbers oF ice creams={numOfIcecreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order ice creams</button>
        <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
        <button onClick={()=>dispatch(restocked(value))}>Restocked ice creams</button>



    </div>
    )
}

export default IcecreamView