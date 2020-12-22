import React from 'react'
import PaginationTableItem from "./paginationTableItem.js"


export default function PaginationTable(props){
  return (
    <nav aria-label="...">
        <PaginationTableItem currentPage={props.currentPage} totalPages={props.totalPages} changePage={props.changePage}/>
    </nav>
        // <li class="page-item disabled">
        //   <a class="page-link" tabindex="-1">1</a>
        // </li>
        // <li class="page-item"><a class="page-link">2</a></li>
        // <li class="page-item"><a class="page-link">3</a></li>
      
  )
}