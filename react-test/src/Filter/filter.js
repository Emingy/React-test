import React from 'react'


export default function Filter(props){
    return (
        <div>
            <input type="text" id="input"/>
            <button onClick={() => props.search(document.getElementById('input').value)}>Search</button>
        </div>
    )
}