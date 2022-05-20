import React, {useState, useEffect} from 'react';
import './dashboard.css'

import { variables } from '../../API/Api';

const Dashboard = () => {

    const [projects, setProjects] = useState([]);

    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [submissionDate, setSubmissionDate] = useState();
    const [budget, setBudget] = useState();
    const [mount, setMount] = useState();
    const [author, setAuthor] = useState();
    const [field, setField] = useState();
    const [photoname, setPhotoname] = useState();

    const refreshList = async () => {
        await fetch(variables.API_URL+'project')
        .then(response => response.json())
        .then(data=>{
            setProjects(data)
        });
    };

    const publishProject = async (id) => {
        const response = await fetch(variables.API_URL+'project/'+id, {
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                State: 2,
            })
        })
        const data = await response.json();
        console.log(data)
    }


    const deleteProject = async (id) => {
        const response = await fetch(variables.API_URL+'project/'+id, {
            method:'DELETE'
        });
        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        refreshList();
    }, [])

    
  return (
      <div className='container-projects'>
        <div className='project_text'>
            <h1>Projects</h1>
        </div>
        <div className='project_table_container'>
            <table className='projects_table' border=''>
                <thead className='project_titles'>
                    <tr className='text_head'>
                        <th>Project Title</th>
                        <th>Author</th>
                        <th>Submittion Date</th>
                        <th>State</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="project_table-body">
                        {projects.map(project => (
                            <tr className='text_body'>
                                <td>{project.Title}</td>
                                <td>{project.Author}</td>
                                <td>{project.SubmittionDate}</td>
                                <td>{project.State}</td>
                                <td>
                                <div>
                                    <button 
                                    className='publish_button'
                                    onClick={() => publishProject(project.id)}
                                    >
                                    Publish
                                    </button>
                                </div>
                                </td>
                                <td>
                                    <div>
                                        <button 
                                        className='discard_button'
                                        onClick={() => deleteProject(project.id)}
                                        >
                                        Discard
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
      </div>
  )
}

export default Dashboard