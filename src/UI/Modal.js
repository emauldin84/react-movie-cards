import React from 'react'

import Backdrop from './Backdrop'

const Modal = (props) => {
    return (
        <Backdrop show={props.show} clicked={props.clicked}/>
    )

}

export default Modal