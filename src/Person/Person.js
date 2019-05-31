import React from 'react';

const person = (props) => {
	const name = props.name;
	const age = props.age;
	const children = props.children;

	return (
		<div>
			<p onClick={props.click}>I'm {name} and I am <b>{age}</b> years old!</p>
			<p>{children}</p>
		</div>
		);
};

export default person;