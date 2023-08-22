import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photoVisual from '../../../assets/img/prog5.webp';
import photoVisual1 from '../../../assets/img/prog6.webp';
import photoVisual2 from '../../../assets/img/prog7.webp';
import photoVisual3 from '../../../assets/img/prog8.webp';
import photoVisual4 from '../../../assets/img/prog9.webp';
import photoVisual5 from '../../../assets/img/prog10.webp';



export const VisualExp = () => {
	return (
		<VisualExpStyled>
			<SectionTitle>Visual Explorations</SectionTitle>
			<FlexWrapper direction={"column"} align={"center"}>
				<FlexWrapper>
					<VisualImgStyled src={photoVisual} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual1} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual2} alt=""></VisualImgStyled>
				</FlexWrapper>
				<FlexWrapper>
					<VisualImgStyled src={photoVisual3} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual4} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual5} alt=""></VisualImgStyled>
				</FlexWrapper>
			</FlexWrapper>
		</VisualExpStyled>
	);
};

const VisualExpStyled = styled.section`
	min-height:100vh;
	background-color: #88bac4;
`

const VisualImgStyled = styled.img`
	object-fit:cover;
	width: 400px;
	height: 410px;
`
// const VisualBox=styled.div`
// 	display: flex;
// 	column-gap:10px;
// `