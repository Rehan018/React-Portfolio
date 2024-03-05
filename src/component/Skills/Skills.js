import React, { Component } from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import './skills.css';

class Skills extends Component {
  render() {
    return (
        <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
      </section>
    );
  }
}

export default Skills;
