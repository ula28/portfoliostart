import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/logo/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { CardWork } from './work/cardWork';
import socialImage from './../../../assets/img/prog2.jpg';
import timerImage from './../../../assets/img/prog1.jpg';

const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
	return (
		<WorksStyled>
			<SectionTitle>My Works</SectionTitle>
			<Menu menuItems={worksItems} />
			<FlexWrapper justify={"center"} gapcolumn={"10px"} >
				<CardWork title={"Social Network"}
					text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
					src={socialImage} />
				<CardWork title={"Timer"}
					text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
					src={timerImage} />
			</FlexWrapper>



		</WorksStyled>



	)
}

const WorksStyled = styled.div`
		min-height:100vh;
		background-color: #ecc771;

	`

