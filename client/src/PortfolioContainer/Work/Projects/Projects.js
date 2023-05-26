import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects(props){
    const project = props.project;
    const [projectDetails, setProjectDetails] = useState(false); // is project Details opened?
    let [carrouselLeft, setCarrouselLeft] = useState(false); // is the left button of carrousel displayed?
    let [carrouselRight, setCarrouselRight] = useState(true); // is the right button of carrousel displayed?
    
    // When we open a project Details, the scroll of body disable
    if(projectDetails){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "overlay";
    }

    // show tags of techs used
    const Techs = () => project.Tecnologies.map(function(object,i){
        return(
            <span className="project-tech card" style={{backgroundColor: project.Colores[0]}} key={i}>{object}</span>
        );
    });

    // show some notes of the project
    const Notes = () => project.Notes.map(function(object,i){
        return(
            <li className="project-note" key={i}>{object}</li>
        );
    });

    // display every image of the project
    const ProjectImages = () => project.Images.map(function(object, i){
        return(
            <img 
                alt={project.Name} 
                src={require('../../../assets/work' + object)}
                key={i}
                id={'imagen_' + i}
            />
        );
    });

    const controlOpenDetails = (action) => {
        setCarrouselLeft(false);
        setCarrouselRight(true);

        if(action === 'open'){
            setProjectDetails(true);
        }else{
            setProjectDetails(false);
        }
    };

    const controlScrollDetails = (e, direction) => {
        let target = e.currentTarget.parentElement.firstChild.nextSibling;   
        let totalScrollWidth = target.firstChild.offsetWidth * (project.Images.length - 1) ;

        if(direction === 'left'){
            target.scrollLeft -= target.firstChild.offsetWidth;
            (target.scrollLeft + 3 < target.firstChild.offsetWidth) ? setCarrouselLeft(false) : setCarrouselLeft(true);
            (target.scrollLeft > totalScrollWidth) ? setCarrouselRight(false) : setCarrouselRight(true);
        }else{
            target.scrollLeft += target.firstChild.offsetWidth;
            (target.scrollLeft + 3 > target.firstChild.offsetWidth) ? setCarrouselLeft(true) : setCarrouselLeft(false);
            (target.scrollLeft < totalScrollWidth) ? setCarrouselRight(true) : setCarrouselRight(false);
        }
    }

    const scrollProjectControl = (element) => {

        let currentElementIndex = Math.round(element.scrollLeft / element.offsetWidth);
        let currentElement = element.children[currentElementIndex];

        currentElement.addEventListener("click", () => {
            currentElement.classList.remove("project-image-activated");
            setTimeout(() => {
                currentElement.classList.add("project-image-activated");
            }, 1000);
        })

        for (let i = 0; i < element.children.length; i++) {
            if(element.children[i].id === currentElement.id){
                element.children[i].classList.add("project-image-activated");
            }else{
                element.children[i].classList.remove("project-image-activated");
            }
        }
    }

    useEffect(() => {
        if(document.getElementsByClassName("project-carrousel")[0]){
            document.getElementsByClassName("project-carrousel")[0].addEventListener('scroll', function(event) {
                scrollProjectControl(event.currentTarget)
            });
        }

        if(projectDetails) {
            scrollProjectControl(document.getElementsByClassName("project-screen")[0])
        };
    });

    return(
        <li className="project-container">
            <button className="project-card load-animation-element card" onClick={() => {controlOpenDetails('open')}}>
                <div className="project-image">
                    <img 
                        alt={project.Name} 
                        src={require('../../../assets/work' + project.Images[0])} 
                    />
                    <div className="project-show-more card" style={{backgroundColor: 'white'}}>
                        <FontAwesomeIcon icon="fa-solid fa-eye" size='lg'/>
                        <div>
                            <span> Show more...</span>
                        </div>
                    </div>
                </div>
                <div className="project-information">
                    <h3 className="project-name"><b>{project.Name}</b></h3>
                    <span className="project-type card" style={{backgroundColor: project.Colores[0]}}>
                        {project.Type}
                    </span>
                    <span className="project-description">{project.Description}</span>
                </div>
            </button>
            {projectDetails && 
                <div className='project-screen' onClick={() => {controlOpenDetails('close')}}>
                    <div className='project-details-container' onClick={(e) => {e.stopPropagation()}}>
                        <button className='close-project-datails' onClick={() => {controlOpenDetails('close')}}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" size='xl'/>
                        </button>
                        <div className='project-details card'>    
                            <div className='project-details-header'>
                                <div className='top-window'>
                                    <div className='close-window item-window'></div>
                                    <div className='expand-window item-window'></div>
                                    <div className='min-window item-window'></div>
                                </div>
                                <div className='project-carrousel card'>
                                        <ProjectImages />
                                </div>
                                {carrouselLeft &&
                                    <button className='button-carrousel-left' onClick={(e) => controlScrollDetails(e, 'left')}>
                                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" size='lg' style={{backgroundColor: project.Colores[1]}} />
                                    </button>
                                }
                                {carrouselRight &&
                                    <button className='button-carrousel-right' onClick={(e) => controlScrollDetails(e, 'right')}>
                                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" size='lg' style={{backgroundColor: project.Colores[1]}} />
                                    </button>
                                }
                                <div className='bottom-window'></div>
                            </div>
                            <div className='project-details-body'>
                                <div className="project-tags">
                                    <span className="project-tag card" style={{backgroundColor: project.Colores[1]}}>{project.Type}</span>
                                    <span className="project-tag card" style={{backgroundColor: project.Colores[1]}}>{project.Year}</span>
                                </div>
                                <h3 className="project-name">
                                    <a href={project.Links[0]} target='_blank' rel="noreferrer">
                                        {project.Name} <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                                    </a>
                                </h3>
                                <p className="project-description">{project.Description}</p>
                                <div className="project-separator" style={{backgroundColor: project.Colores[0]}}/>
                                <div className='project-notes'>
                                    <ul>
                                        <Notes />
                                    </ul>
                                </div>
                                <div className="techs-wrap">
                                    <Techs/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </li>
    );
};
