import React from 'react'
import PaginationTableItem from "./paginationTableItem.js"


export default function PaginationTable(props){
  return (
    <nav aria-label="...">
        <PaginationTableItem currentPage={props.currentPage} totalPages={props.totalPages} changePage={props.changePage}/>
    </nav>
      
  )
}