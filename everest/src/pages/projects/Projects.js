import React, {useEffect, useState} from "react";
import './projects.css';
import { variables } from "../../API/Api";
import {motion} from 'framer-motion';

import ProjectCard from "./ProjectCard";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    const refreshList = () => {
        fetch(variables.API_URL+'project')
        .then(response => response.json())
        .then(data=>{
            setProjects(data)
        });
    };

    useEffect(() => {
        refreshList();
    }, [])

    return(
        <motion.div initial={{ opacity: 0}} 
                    animate={{opacity: 1}} 
                    exit={{opacity: 0}}
                    className="app">
            <div className="container">
                {projects.map((project)=>
                <ProjectCard project={project}/>  
                )}
            </div>
            ):(
              <div className="text">
                  <h2>NOTHING FOUND</h2>
              </div>
              )
        </motion.div>
    )
}

export default Projects;