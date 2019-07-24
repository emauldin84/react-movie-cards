import React from 'react'

let Search = (props) => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <input type='text' name='search' placeholder='Search Movies...' defaultValue={props.value} onChange={props.change}></input>
            </form>
        </div>


    )
}


export default Search