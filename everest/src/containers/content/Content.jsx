import React from 'react';
import './content.css';
import { Author, Description, Title } from '../../components';


const Content = ({project, author}) => {
    return (
        <div>
            <Author autor={author} fecha={project.SubmittionDate}/>
            <Title title={project.Title}/>
            <Description description={project.Desc}/>
        </div>
    )
}

export default Content