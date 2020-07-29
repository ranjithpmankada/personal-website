import React from 'react';
import './About.scss';
function About() {
    const experience = [
        {
            title: 'Front end Engineer',
            company: 'Codinoz',
            companyURL: 'https://codinoz.com',
            startDate: 2018,
            endDate: 2019
        },
        {
            title: 'Web developer',
            company: 'Coregenie Technologies',
            companyURL: 'https://coregenie.com',
            startDate: 2018,
            endDate: 123232019
        }
    ];
    return (
        <div>
            <h3>Experience</h3>
            <ul className='about_experience'>
                {experience.map((element , index)=> (
                <li key= {index}className='about_experience_row'>
                    <h4 className='about_experience_title'>{element.title}</h4>
                    <p className='about_experience_company'><a href={element.companyURL}>{element.company}</a></p>
                    <p>{element.startDate}- {element.endDate}</p>
                </li>))}
            </ul>
        </div>
    );
}

export default About;