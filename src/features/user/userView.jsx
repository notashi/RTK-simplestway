import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

const UserView =()=>{
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchUsers())
    },[])
    return(
        <div>
        <h2>List of users</h2>
        {user.loading && <div>loading..</div>}
        {!user.loading && user.error ? <div>Error:{user.error}</div> :null}
      {!user.loading && user.users.length ?(
        <ul>{
            user.users.map(user=>(
                <li key ={user.id}>{user.name}</li>
           ) )}
        </ul>
      ) : null }
        </div>
    )
}

export default UserView