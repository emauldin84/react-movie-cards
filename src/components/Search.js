import React from 'react'

let Search = (props) => {
    return (
        <div className="input-group text-center">
            <form onSubmit={props.submitHandler}>
                <input className='form-control' type='text' name='search' placeholder='Search Movies...' defaultValue={props.value} onChange={props.change}></input>
            </form>
        </div>


    )
}


export default Search