import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
// import {SectionPhoto} from '../../../components/SectionPhoto';
import sectionPhoto from '../../../assets/img/prog11.webp';
import sectionPhoto1 from '../../../assets/img/prog11.webp';
import sectionPhoto2 from '../../../assets/img/prog11.webp';
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


export const PersonalProject = () => {
	return (
		<PersonalPrStyled>
			<Container>
				<SectionTitle>Personal Projects</SectionTitle>
				<FlexWrapper align={"center"} gapcolumn={"10px"} wrap={"wrap"} gaprow={"10px"}>
					<PersonalPhoto src={sectionPhoto} alt=""></PersonalPhoto>
					<PersonalPhoto src={sectionPhoto1} alt=""></PersonalPhoto>
					<PersonalPhoto src={sectionPhoto2} alt=""></PersonalPhoto>
				</FlexWrapper>
			</Container>
		</PersonalPrStyled>

	);
};

const PersonalPrStyled = styled.section`
	/* min-height:100vh; */
	/* background-color: #677752; */
`
const PersonalPhoto = styled.img`
		width:400px;
		flex-grow:1;
		min-height:560px;
		
		object-fit:cover;
	

		 @media screen and (max-width:1250px){
			max-width:100%;
		} 

		@media ${theme.media.mobile}{
			min-height:600px;
			width: 366px;
		}

	
`

