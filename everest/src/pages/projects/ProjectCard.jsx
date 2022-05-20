import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { variables } from '../../API/Api';

const ProjectCard = ({project}) => {

    const [states, setStates] = useState([]);

    const [author, setAuthor] = useState([]);

    const findState = () =>{
        fetch(variables.API_URL+'state/'+project.State)
        .then(response=>response.json())
        .then(data=>{
            setStates(data)
        })
    }

    const findAuthor = () => {
        fetch(variables.API_URL+'user/'+project.Author)
        .then(response=>response.json())
        .then(data=>
            setAuthor(data))
    }

    useEffect(()=>{
        findState();
        findAuthor();
    }, [])

  return (
      <div className='project'>
        <NavLink to={`/projects/${project.id}`}>
        {states.id === 1 ? (
            <div style={{background: '#FF0000'}}>
            <p>{states.State}</p>
            </div>
        ): states.id === 2 ? (
            <div style={{background: '#EC7F00'}}>
            <p>{project.State}</p>
            </div>

        ): states.id === 3 ? (
            <div style={{background: '#04B500'}}>
            <p>{project.State}</p>
            </div>
        ):(
            <div>
            <p>UNKNOWN</p>
            </div>
        )}
        <div>
            <img src={variables.PHOTO_URL+project.PhotoFileName !== '' ? variables.PHOTO_URL+project.PhotoFileName : 'https://via.placeholder.com/400'}/>
        </div>
        <div>
            <span>{project.SubmittionDate}</span>
            <h3>{project.Title}</h3>
            {console.log(author)}
            <h2>{author.Name+' '+author.LastName}</h2>
        </div>
        </NavLink>
    </div>
  )
}

export default ProjectCard