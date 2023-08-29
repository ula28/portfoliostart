import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Card } from '../skills/skill/Card';


export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>My Skills</SectionTitle>
			<FlexWrapper wrap={"wrap"} justify={"space-between"}>
				<Card iconId={"ts"}
					title={"html5"}
					description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				<Card iconId={"be"}
					title={"css3"}
					description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				<Card iconId={"in"}
					title={"react"}
					description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				<Card iconId={"twitter"}
					title={"react"}
					description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				<Card iconId={"in"}
					title={"react"}
					description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				<Card iconId={"in"}
					title={"react"}
					description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
			</FlexWrapper>
		</StyledSkills>
	);
}


const StyledSkills = styled.section`
	min-height: 100vh;
	background-color: #e18d8d;

`


