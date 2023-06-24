import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { ordered,restocked } from "./cakeSlice";
const CakeView =()=>{
const numOfCakes =    useSelector((state)=>state.cake.numOfCakes)
const dispatch =useDispatch()
    return(
        <div>
            <h2>Numbers oF cake={numOfCakes}</h2>
            <button onClick={()=>(dispatch(ordered()))} >Order cake</button>
            <button onClick={()=>(dispatch(restocked(5)))}>Restocked cakes</button>



        </div>
    )
}

export default CakeView