import React from 'react';
import './Timeline.css';
import grupo_mbc from '../../assets/timeline/grupo_mbc.jpg';
import self_taught from '../../assets/timeline/self-taught.jpg';
import web_developer_1 from '../../assets/timeline/web_developer_1.jpg';

export default function Timeline(){
    return (
        <section id='timeline-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>What I've been doing...</h2>
            <article id="timeline-wrap" className='load-animation-element'>
                <ul>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={self_taught} alt='self_taught'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>Before 2019</span>
                            <h3 className="magic-underline">Self-taught</h3>
                            <p>
                                I have always been interested in the world of web development, however, it was 
                                not until 2019 that I decided to dedicate myself to this professionally.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={grupo_mbc} alt='grupo_mbc'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>2019 - 2020</span>
                            <h3 className="magic-underline">Professional Certificate development of applications with web technologies</h3>
                            <p>
                                With great effort, in 2020 I finished my studies at the formation center, Grupo MBC.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={web_developer_1} alt='web_developer_1'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>2020 - Today</span>
                            <h3 className="magic-underline">Web Developer</h3>
                            <p>
                                After finishing the course, the same formation center hired me 
                                to create and maintain learning platforms with Moodle where I am still working currently. 
                            </p>
                        </div>
                    </li>
                </ul>
            </article>
        </section>
    )
}