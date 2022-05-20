import React from 'react';
import './description.css';


const Description = ({description}) => {
    return (
        <div className='description_container'>
            <p>{description}</p>
        </div>
    )
}

export default Description