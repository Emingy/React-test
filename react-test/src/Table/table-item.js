import React from 'react'


export default function TableItem({item}){
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    )
}