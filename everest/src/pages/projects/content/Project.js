import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Comments, Header, Content } from '../../../containers';
import './project.css'
import { motion } from 'framer-motion';
import { variables } from '../../../API/Api';

const Project = () => {

    const {id} = useParams();

    const [project, setProject] = useState([]);
    const [author, setAuthor] = useState('');

    const getProject = () => {
        fetch(variables.API_URL+'project/'+id)
        .then(response => response.json())
        .then(data=>{
            setProject(data)
        });
    }

    const findAuthor = () => {
        fetch(variables.API_URL+'user/'+project.Author)
        .then(response=>response.json())
        .then(data=>
            setAuthor(data.Name+' '+data.LastName))
    }
    
    useEffect(()=>{
        getProject();
        findAuthor();
    }, [])

    return (
        <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className='App'>
        <div>
            {console.log(project)}
            <Header project={project}/> 
        </div>         
            <Content project={project} author={author}/>
        <div className='divider'></div>
            <Comments/>
        </motion.div>
  )
}

export default Project