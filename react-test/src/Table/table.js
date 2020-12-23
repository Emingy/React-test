import React from 'react'
import TableItem from './table-item.js'


export default function Table(items){
    return (
        <table>
            <tbody>
                <tr>
                    <td onClick={() => items.sortBySymbol('id')}>id</td>
                    <td onClick={() => items.sortBySymbol('firstName')}>firstName</td>
                    <td onClick={() => items.sortBySymbol('lastName')}>lastName</td>
                    <td onClick={() => items.sortBySymbol('email')}>email</td>
                    <td onClick={() => items.sortBySymbol('phone')}>phone</td>
                </tr>
                { items.data.map((item, idx) => {
                    return <TableItem item={item} key={idx} func={items}/>
                }) }
            </tbody>
        </table>
    )
}