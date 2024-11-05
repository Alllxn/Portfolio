import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svelte from '../../assets/about/svelte.svg';

export default function About() {

    return (
        <section id='about-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>Me, Mysefl & I</h2>
            <article id='about-presentation'>
                <div id='biography' className=''>
                    <p className='load-animation-element'>
                        👋 Hello, my name is <b>Allan Bastian Espinoza Ibañez</b>. I'm a web developer but above all I'm a <b>problem solver</b>.
                        I currently work at AYESA, a company focused on providing technology and engineering services globally, developing 
                        e-learning platforms with Moodle throughout Spain.
                    </p>
                    <p>
                    </p>
                    <div id="biography-more-info"> 
                        <div id="biography-education" className="biography-element load-animation-element">
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <p><span>Certificate of Higher Education Web Applications Development.</span> <span>🎓</span></p>
                                    <p><span>IES El Rincón.</span></p>
                                </li>
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
                        <div id='biography-skills' className="biography-element load-animation-element">
                            <h3>Hard-skills</h3>
                            <ul>
                                <li>
                                    <p style={{backgroundColor:"#E54D26"}}><span>HTML5</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-html5"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#379AD5"}}><span>CSS3</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-css3-alt"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#bf4080"}}><span>SASS</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-sass"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#f0db4f"}}><span>Javascript</span> <span class="hard-skill-icon javascript"><FontAwesomeIcon icon="fa-brands fa-square-js"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#68a063"}}><span>Node.js</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-node-js"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#7cc5d9"}}><span>React</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-react"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#ff3e00"}}><span>Svelte</span> <span class="hard-skill-icon svelte"><img src={svelte} alt='svelte'/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#8993be"}}><span>PHP</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-php"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#e98122"}}><span>Java</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-brands fa-java"/></span></p>
                                </li>
                                <li>
                                    <p style={{backgroundColor:"#F98012"}}><span>Moodle</span> <span class="hard-skill-icon"><FontAwesomeIcon icon="fa-solid fa-graduation-cap"/></span></p>
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