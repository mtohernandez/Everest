import React from 'react';
import './comment_card.css';


const CommentCard = () => {
    const comment = {
        'author' : 'Alejandro Casadiegos',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo lacus vel efficitur blandit. Sed ultricies tellus eget urna ultricies fringilla. Duis tincidunt et tortor eu commodo. Etiam tempor ante purus, tempor aliquet lorem elementum nec. In quis velit ipsum. Donec nec metus odio. Cras ut arcu ac sem pellentesque euismod. Mauris pretium tristique erat vitae vestibulum. Nunc egestas porta nisl quis interdum.'
    }
    return (
        <div className='comment_container'>
            <div className='circle_container'>
                <div className='name_circle'>
                    <p>{comment.author[0]}</p>
                </div>
            </div>
            <div className='comment_info'>
                <div className='comment_author'>
                    <p>{comment.author}</p>
                </div>
                <div className='comment_content'>
                    <p>{comment.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard