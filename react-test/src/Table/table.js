import React from 'react'
import TableItem from './table-item.js'


export default function Table(items){
    return (
        <table>
            <tbody>
                <tr>
                    <td><button onClick={() => items.sortBySymbol('id')}/>id</td>
                    <td><button onClick={() => items.sortBySymbol('firstName')}/>firstName</td>
                    <td><button onClick={() => items.sortBySymbol('lastName')}/>lastName</td>
                    <td><button onClick={() => items.sortBySymbol('email')}/>email</td>
                    <td><button onClick={() => items.sortBySymbol('phone')}/>phone</td>
                </tr>
                { items.data.map((item, idx) => {
                    return <TableItem item={item} key={idx}/>
                }) }
            </tbody>
        </table>
    )
}