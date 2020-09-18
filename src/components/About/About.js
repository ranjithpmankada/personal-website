import React from "react";
import Nav from "../Nav/Nav";
import "./About.scss";
import Experience from "./Experience";
import Resume from "./Resume";
import Skills from "./Skills";

function About() {
	const experience = [
		{
			title: "Front end Engineer",
			company: "Codinoz",
			companyURL: "https://codinoz.com",
			startDate: 2018,
			endDate: 2019,
		},
		{
			title: "Web developer",
			company: "Coregenie Technologies",
			companyURL: "https://coregenie.com",
			startDate: 2018,
			endDate: 2019,
		},
	];
	return (
		<div className='about'>
			<Nav page='About' />
			<h1 className='title'>A bit about myself</h1>
			<p>Just about</p>
			<p>what i do</p>
			<p>My experience, awards collaborations, and own vibes,for sure!</p>
			<p>So,</p>
			<p>
				I'm Ranjith - A web developer with a Computer Science
				Engineering major.
			</p>
			<Experience experience={experience} />
			<Skills />
			<Resume />
		</div>
	);
}

export default About;
