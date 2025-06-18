import React from "react";
import {useParams} from "react-router-dom"

export default function User(){
    const {id} = useParams();
    return (
        <>
        <h1>User page</h1>
        <p>this is the user page and id is <b>{id}</b></p>
        </>
    )
}