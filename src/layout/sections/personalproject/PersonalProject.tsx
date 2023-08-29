import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
// import {SectionPhoto} from '../../../components/SectionPhoto';
import sectionPhoto from '../../../assets/img/prog11.webp';
import sectionPhoto1 from '../../../assets/img/prog12.webp';
import sectionPhoto2 from '../../../assets/img/prog13.webp';
import { SectionTitle } from '../../../components/SectionTitle'


export const PersonalProject = () => {
	return (
		<PersonalPrStyled>
			<SectionTitle>Personal Projects</SectionTitle>
			<FlexWrapper align={"center"} justify={"center"} gapcolumn={"10px"}>
				<PersonalPhoto src={sectionPhoto} alt=""></PersonalPhoto>
				<PersonalPhoto src={sectionPhoto} alt=""></PersonalPhoto>
				<PersonalPhoto src={sectionPhoto} alt=""></PersonalPhoto>
			</FlexWrapper>

		</PersonalPrStyled>

	);
};

const PersonalPrStyled = styled.section`
	min-height:100vh;
	background-color: #677752;
`
const PersonalPhoto = styled.img`
		width:400px;
		height:560px;
		object-fit:cover;
	
`

