import React from 'react'

import Backdrop from './Backdrop'

const Modal = (props) => {
    console.log('props.children', props.children)
    return (
        <div>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div 
                className="Modal" 
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-150vh)', 
                    opacity: props.show ? '1': '0'
                    }}>
                {/* {this.props.children} */}
            </div>


        </div>
    )

}

export default Modal