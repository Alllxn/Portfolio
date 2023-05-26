import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {

    return (
        <section id='about-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>Me, Mysefl & I</h2>
            <article id='about-presentation'>
                <div id='biography' className=''>
                    <p className='load-animation-element'>
                        👋 Hello, my name is <b>Allan Bastian Espinoza Ibañez</b>. I'm a web developer but above all I'm a problem solver.
                        I am currently working in a training center developing e-learning platforms with Moodle while I am studying to be a technician in web application development.
                    </p>
                    <p>
                    </p>
                    <div id="biography-more-info"> 
                        <div id="biography-education" className="biography-element load-animation-element">
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <p><span>Professional Certificate development of applications with web technologies.</span> <span>🎓</span></p>
                                    <p><span>Grupo MBC.</span></p>
                                </li>
                                <li>
                                    <p><span>Baccalaureate.</span> <span>🎓</span></p>
                                    <p><span>EASDGC, Escuela de Arte y Superior de Diseño de Gran Canaria.</span></p>
                                </li>
                                <li>
                                    <p><span>High School.</span> <span>🎓</span></p>
                                    <p><span>School San Vicente de Paúl.</span></p>
                                </li>
                            </ul>
                        </div>
                        <div id='biography-soft-skills' className="biography-element load-animation-element">
                            <h3>Soft-skills</h3>
                            <ul>
                                <li>
                                    <p><span>Empathy and emotional intelligence.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Ability to resolve problems and conflicts.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Curiosity.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Efficient time management.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Communication skills.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Adaptation to change.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Self-motivation.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Initiative.</span> <span>✨</span></p>
                                </li>
                                <li>
                                    <p><span>Fast learning skills.</span> <span>✨</span></p>
                                </li>
                            </ul>
                        </div>
                        <div id='biography-skills' className="biography-element load-animation-element">
                            <h3>Hard-skills</h3>
                            <ul>
                                <li>
                                    <p><span>HTML5</span> <span><FontAwesomeIcon icon="fa-brands fa-html5" style={{color:"#E54D26"}}/></span></p>
                                </li>
                                <li>
                                    <p><span>CSS3</span> <span><FontAwesomeIcon icon="fa-brands fa-css3-alt" style={{color:"#379AD5"}}/></span></p>
                                </li>
                                <li>
                                    <p><span>SASS</span> <span><FontAwesomeIcon icon="fa-brands fa-sass" style={{color:"#bf4080"}}/></span></p>
                                </li>
                                <li>
                                    <p><span>Javascript</span> <span><FontAwesomeIcon icon="fa-brands fa-square-js" style={{color:"#f0db4f"}}/></span></p>
                                </li>
                                <li>
                                    <p><span>Node.js</span> <span><FontAwesomeIcon icon="fa-brands fa-node-js" style={{color:"#68a063"}}/></span></p>
                                </li>
                                <li>
                                    <p><span>React</span> <span><FontAwesomeIcon icon="fa-brands fa-react" style={{color:"#7cc5d9"}} /></span></p>
                                </li>
                                <li>
                                    <p><span>PHP</span> <span><FontAwesomeIcon icon="fa-brands fa-php" style={{color:"#8993be"}}/></span></p>
                                </li>
                                <li>
                                    <p><span>Moodle</span> <span><FontAwesomeIcon icon="fa-solid fa-graduation-cap" style={{color:"#F98012"}}/></span></p>
                                </li>
                            </ul>
                        </div>
                        <div id="biography-interests" className="biography-element load-animation-element">
                            <h3>Interests</h3>
                            <ul>
                                <li>
                                    <p><span>Frontend development</span> <span>🖥️</span></p>
                                </li>
                                <li>
                                    <p><span>Backend development</span> <span>⚙️</span></p>
                                </li>
                                <li>
                                    <p><span>UX/UI design</span>  <span>🎨</span></p>
                                </li>
                                <li>
                                    <p><span>Agile Metodologies</span> <span>🤖</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="know-me-more-container" className='load-animation-element'>
                    <p>Would you like to know more about me?</p>
                    <a href="#contact-container" id="know-me-more" className="button-cta card">
                        <span className="magic-background">
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                        </span>
                        <span>
                            Get in touch! ☕
                        </span>     
                    </a>
                </div>
            </article>
        </section>
    )
}