// Projects.js

import React, { useEffect, useState } from 'react';
import { projectsData } from "./Data";
import { projectsNav } from './Data';
import ProjectItems from "./ProjectItems";

const Projects = () => {
    const [item, setItem] =  useState({ name: "All", link: "#" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
         if(item.name === "All") {
            setProjects(projectsData);
         }
         else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
         }
    },[item]);
    
    const handleClick  = (e, index) => {
        const itemName = e.target.textContent;
        const link = itemName === "All" ? "#" : `/projects/${itemName.toLowerCase()}`;
        setItem({ name: itemName, link: link });
        setActive(index);
    };

    return (
        <div>
            <div className="project__filters">
                {projectsNav.map((item,index) => {
                    return (
                        <span onClick={(e) => {
                            handleClick(e, index);
                        }}
                        className={`${active === index ? 'active-project' : ''} project__item`}
                        key={index}>{item.name}</span>
                    )
                })}
            </div>
            <div className="project__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id} link={item.link} />
                })}
            </div>
        </div>
    );
}

export default Projects;
