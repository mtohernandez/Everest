import React from 'react';
import './header.css';
import { Photo } from '../../components';
import { variables } from '../../API/Api';


const Header = ({project}) => {
    return (
        <div>
            <Photo state={project.State} background={variables.PHOTO_URL+project.PhotoFileName}/>
        </div>
    )
}

export default Header