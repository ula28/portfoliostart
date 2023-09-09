import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { CardWork } from './work/cardWork';
import socialImage from './../../../assets/img/prog2.jpg';
import timerImage from './../../../assets/img/prog1.jpg';
import { Container } from '../../../components/Container';

const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
	return (
		<WorksStyled>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={worksItems} />
				<FlexWrapper justify={"space-between"}  align={"start"} >
					<CardWork title={"Social Network"}
						text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
						src={socialImage} />
					<CardWork title={"Timer"}
						text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
						src={timerImage} />
				</FlexWrapper>
			</Container>
		</WorksStyled>
	)
}

const WorksStyled = styled.section`
		
		background-color: #c2b392;

	`

