import React from "react";
import "./Experience.scss";

export default function Experience({ experience }) {
	return (
		<section className='experience'>
			<h3 className='sub-title'>Experience</h3>
			<ul className='about_experience'>
				{experience.map((element, index) => (
					<li key={index} className='about_experience_row'>
						<h4 className='about_experience_title'>
							{element.title}
						</h4>
						<p className='about_experience_company'>
							<a href={element.companyURL}>{element.company}</a>
						</p>
						<p>
							{element.startDate}- {element.endDate}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
