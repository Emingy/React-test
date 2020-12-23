import React from 'react'


export default function PaginationTableItem(props){
    const getItem = (curr, tot) => {
        let pagination = [];
        if(curr>1){
            pagination.push(<li className="page-item" key={curr-1}><a  onClick={() => props.changePage(curr-1)} className="page-link">{curr-1}</a></li>);
        }
        for (let number = curr; number <= tot && number<=curr+4; number++) {
            if(number==curr){
                pagination.push(<li className="page-item disabled" key={number}>
                    <a className="page-link" tabIndex="-1">{number}</a>
                </li>);
            }else{
                pagination.push(<li className="page-item" key={number}><a  onClick={() => props.changePage(number)} className="page-link">{number}</a></li>);
            }
        }
        return pagination
    };
    

  return (
    <ul className="pagination pagination-lg">
      {getItem(props.currentPage, props.totalPages)}
    </ul>
    )
}