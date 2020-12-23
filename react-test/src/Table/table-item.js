import React from 'react'


export default function TableItem(item){
    return (
        <tr onClick={() => item.func.additionalInformation(item.item.firstName,item.item.lastName)}>
            <td>{item.item.id}</td>
            <td>{item.item.firstName}</td>
            <td>{item.item.lastName}</td>
            <td>{item.item.email}</td>
            <td>{item.item.phone}</td>
        </tr>
    )
}