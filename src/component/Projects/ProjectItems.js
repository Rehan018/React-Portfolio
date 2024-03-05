// ProjectItems.js

import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item, link }) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href={link} className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default ProjectItems;
