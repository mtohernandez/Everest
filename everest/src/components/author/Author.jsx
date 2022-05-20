import React from 'react';
import './author.css';


const Author = ({autor, fecha}) => {
    return (
        <div className='author-date-content'>
            <div className='author_date_container'>
                <p>{autor}</p>
                <div className='circle'/>
                <p>{fecha}</p>
            </div>
        </div>
    )
}

export default Author