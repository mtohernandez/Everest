import React from 'react';
import './comments.css';
import { CommentCard } from '../../components';


const Comments = () => {
    return (
        <div className='comments_container'>
            <p>Comments</p>
            <div className='comment_card_container'>
                <CommentCard/>
            </div>
        </div>
    )
}

export default Comments