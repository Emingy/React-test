import React from 'react'


export default function PaginationTableItem(props){
    const getItem = (curr, tot) => {
        let pagination = [];
        for (let number = 1; number <= tot; number++) {
            if(number==curr){
                pagination.push(<li class="page-item disabled">
                    <a class="page-link" tabindex="-1">{number}</a>
                </li>);
            }else{
                pagination.push(<li class="page-item"><a class="page-link">{number}</a></li>);
            }
        }
        return pagination
    };
    

  console.log(props.currentPage, props.totalPages)
  return (
    <ul class="pagination pagination-lg">
      {getItem(props.currentPage, props.totalPages)}
    </ul>
    )
}