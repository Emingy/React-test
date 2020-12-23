import React from 'react'


export default function Filter(props){
    return (
        <div>
            <input type="text" id="input" onChange={() => props.change(document.getElementById('input').value)}/>
            <button onClick={() => props.search()}>Search</button>
        </div>
    )
}