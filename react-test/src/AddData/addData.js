import React from 'react'


export default function AddData(props){
    var btn = {
        btnClass:"btn btn-secondary btn-lg",
        btnDisabled: true
    }
    if (props.state.inputIdNull &&
        props.state.inputFirstNameNull &&
        props.state.inputLastNameNull &&
        props.state.inputEmailNull &&
        props.state.inputPhoneNull) {
            btn.btnClass="btn btn-lg btn-primary"
            btn.btnDisabled= false
        
    }else{
        btn.btnClass="btn btn-secondary btn-lg"
        btn.btnDisabled= true
    }
    
    return (
        <div>
        {
            props.formFlag ?  
            <div className="alert alert-secondary" role="alert">
            <table>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>email</td>
                    <td>phone</td>
                </tr>
                <tr>
                    <td><input id='add-input-id' type="number" onChange={(e)=>e.target.value!='' ? props.checkInput('inputIdNull',true) : props.checkInput('inputIdNull',false)
                    }/></td>
                    <td><input id='add-input-firstName' type="text" onChange={(e)=>e.target.value!='' ? props.checkInput('inputFirstNameNull',true) : props.checkInput('inputFirstNameNull',false)
                    }/></td>
                    <td><input id='add-input-lastName' type="text" onChange={(e)=>e.target.value!='' ? props.checkInput('inputLastNameNull',true)  : props.checkInput('inputLastNameNull',false)
                    }/></td>
                    <td><input id='add-input-email' type="text" onChange={(e)=>e.target.value!='' ? props.checkInput('inputEmailNull',true)  : props.checkInput('inputEmailNull',false)
                    }/></td>
                    <td><input id='add-input-phone' type="text" onChange={(e)=>e.target.value!='' ? props.checkInput('inputPhoneNull',true)  : props.checkInput('inputPhoneNull',false)
                    }/></td>
                </tr>
            </tbody>
        </table>
            <button className={btn.btnClass} onClick={()=>{
                let id =document.getElementById('add-input-id')
                let firstName =document.getElementById('add-input-firstName')
                let lastName =document.getElementById('add-input-lastName')
                let email =document.getElementById('add-input-email')
                let phone =document.getElementById('add-input-phone')
                props.addDataToState(id.value,firstName.value,lastName.value,email.value,phone.value)
                id.value=''
                firstName.value=''
                lastName.value=''
                email.value=''
                phone.value=''
                }} disabled={btn.btnDisabled}>Добавить в таблицу</button>
        </div>
             : <button onClick={() => props.openFormAddData()}>Добавить</button>
        }
        </div>
    )
}