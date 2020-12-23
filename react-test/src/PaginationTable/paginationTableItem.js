import React from 'react'


export default function PaginationTableItem(props){
    const getItem = (curr, tot) => {
        let pagination = [];
        if(curr>1){
            pagination.push(<li class="page-item"><a  onClick={() => props.changePage(curr-1)} class="page-link">{curr-1}</a></li>);
        }
        for (let number = curr; number <= tot && number<=curr+4; number++) {
            if(number==curr){
                pagination.push(<li class="page-item disabled">
                    <a class="page-link" tabindex="-1">{number}</a>
                </li>);
            }else{
                pagination.push(<li class="page-item"><a  onClick={() => props.changePage(number)} class="page-link">{number}</a></li>);
            }
        }
        return pagination
    };
    

  return (
    <ul class="pagination pagination-lg">
      {getItem(props.currentPage, props.totalPages)}
    </ul>
    )
}