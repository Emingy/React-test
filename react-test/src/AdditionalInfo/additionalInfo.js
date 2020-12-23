import React from 'react'


export default function additionalInfo(props){
    return (
    <div className="alert alert-secondary" role="alert">
        <h4 className="alert-heading" key={props.data.id}>Выбран пользователь <b>{props.data.firstName+' '+props.data.lastName}</b></h4>
        <textarea defaultValue={props.data.description}></textarea>
        <p className="mb-0">Адрес проживания: <b>{props.data.address.streetAddress}</b></p>
        <p className="mb-0">Город: <b>{props.data.address.city}</b></p>
        <p className="mb-0">Провинция/штат: <b>{props.data.address.state}</b></p>
        <p className="mb-0">Индекс: <b>{props.data.address.zip}</b></p>
    </div>
    )
}