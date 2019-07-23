import React from 'react'

const Backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className="Backdrop"></div> : null
)


export default Backdrop