import { useEffect } from "react";
import { signOut } from "../services/users.js";
import { useNavigate } from "react-router-dom";


export default function Logout ({setUser}){
    let navigate = useNavigate()

    const signoutUser = async() => {
        await signOut()
        setUser(null)
        navigate("/")
    }


    useEffect(()=> {
        signoutUser()
    })

    return  ""
}
