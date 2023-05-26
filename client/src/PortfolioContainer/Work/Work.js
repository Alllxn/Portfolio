import React from 'react';
import './Work.css';
import Projects from './Projects/Projects';
import myData from './Projects/Projects.json';

export default function Work(){
    const project = myData.Projects.map(function(object,i){
        return(
            <Projects project={object} key={i}/>
        );
    });

    return(
        <section id="work-container" className='component'>
            <h2 className='magic-background-underline load-animation-element'>Work</h2>
            <ol id="work-wrap">
                {project}
            </ol>
        </section>
    );
};