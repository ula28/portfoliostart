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
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';



export const VisualExp = () => {
	return (
		<VisualExpStyled>
			<Container>
				<SectionTitle>Visual Explorations</SectionTitle>
				<GridWrapper>
					<VisualImgStyled src={photoVisual} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual1} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual2} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual3} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual4} alt=""></VisualImgStyled>
					<VisualImgStyled src={photoVisual5} alt=""></VisualImgStyled>
				</GridWrapper>
				{/* <FlexWrapper direction={"column"} align={"center"} gaprow={"10px"}>
					<FlexWrapper gapcolumn={"10px"} >

						<VisualImgStyled src={photoVisual} alt=""></VisualImgStyled>
						<VisualImgStyled src={photoVisual1} alt=""></VisualImgStyled>
						<VisualImgStyled src={photoVisual2} alt=""></VisualImgStyled>
					</FlexWrapper>
					<FlexWrapper gapcolumn={"10px"} >
						<VisualImgStyled src={photoVisual3} alt=""></VisualImgStyled>
						<VisualImgStyled src={photoVisual4} alt=""></VisualImgStyled>
						<VisualImgStyled src={photoVisual5} alt=""></VisualImgStyled>
					</FlexWrapper>
				</FlexWrapper> */}
			</Container>
		</VisualExpStyled>
	);
};

const VisualExpStyled = styled.section`
	
	
`
const GridWrapper = styled.div`
	display: grid;
	grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));
	gap:24px;
	justify-content:center;
	align-content:center;
	

	@media ${theme.media.tablet}{
		gap:15px;
	}

`


const VisualImgStyled = styled.img`
	object-fit:cover;
	width: 100%;
	height: 100%;
	aspect-ratio: 1 /1 ;

	/* @media ${theme.media.mobile}{
		max-width:366px;
	} */
`
// const VisualBox=styled.div`
// 	display: flex;
// 	column-gap:10px;
// `