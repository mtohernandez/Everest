import React from 'react';
import './photo.css';
import goBackArrow from '../../assets/goBackArrow.svg';


const Photo = ({state, background}) => {
    return (
        <div className='image' style={{backgroundImage: `url(${background})`}}> 
                <div className='state_container'>
                {state === 1 ? (
                    <div style={{background: '#FF0000', borderRadius: '40px', height: '40px'}}>
                    <p>{state}</p>
                    </div>
                ): state === 2 ? (
                    <div style={{background: '#EC7F00', borderRadius: '40px', height: '40px'}}>
                    <p>{state}</p>
                    </div>

                ): state === 3 ? (
                    <div style={{background: '#04B500', borderRadius: '40px', height: '40px'}}>
                    <p>state</p>
                    </div>
                ):(
                    <div>
                    <p>UNKNOWN</p>
                    </div>
                )}
                </div>
            
        </div>
    )
}

export default Photo