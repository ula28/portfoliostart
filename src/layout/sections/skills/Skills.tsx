import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Card } from '../skills/skill/Card';
import { Container } from '../../../components/Container';


export const Skills = () => {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap={"wrap"} justify={"space-between"}>
					<Card iconId={"ts"} viewBox={"0 0 40 40"} width={"40"} height={"40"}
						title={"html5"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Card iconId={"be"} viewBox={"0 0 30 18"} width={"30"} height={"18"}  
						title={"css3"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Card iconId={"in"}
						title={"react"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Card iconId={"twitter"} viewBox={"0 0 28 22"} width={"28"} height={"22"}  
						title={"react"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Card iconId={"in"}
						title={"react"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Card iconId={"in"}
						title={"react"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				</FlexWrapper>
			</Container>
			
		</StyledSkills>
	);
}


const StyledSkills = styled.section`
	
	background-color: #e18d8d;

`


