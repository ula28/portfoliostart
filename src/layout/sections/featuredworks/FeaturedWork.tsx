import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

import fotowork from '../../../assets/img/prog1.webp';
import fotowork1 from '../../../assets/img/prog2.webp';
import fotowork2 from '../../../assets/img/prog3.webp';
import fotowork3 from '../../../assets/img/prog4.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';





export const FeaturedWork = () => {
	return (
		<FeaturedWorkStyled>
			<Container>
				<FeaturedTop>
					<a href="">
						<Icon iconId={'arrow'} viewBox={"0 0 16 33"} width={"16"} height={"33"} />
					</a>
					<Title>Featured Work</Title>
				</FeaturedTop>
				<FlexWrapper align={"center"} justify={"center"} gapcolumn={"10px"} >
					<FlexWrapper direction={"column"} gaprow={"10px"} >
						{/* <FeaturedWorkPhoto src={myTheme.photos.src1} alt=""></FeaturedWorkPhoto>
					<FeaturedWorkPhoto src={myTheme.photos.src2} alt=""></FeaturedWorkPhoto> */}
						<FeaturedWorkPhoto src={fotowork} alt=""></FeaturedWorkPhoto>
						<FeaturedWorkPhoto src={fotowork1} alt=""></FeaturedWorkPhoto>
					</FlexWrapper>
					<FlexWrapper direction={"column"} marginTop={"140px"} gaprow={"10px"} >
						{/* <FeaturedWorkPhoto src={myTheme.photos.src3} alt=""></FeaturedWorkPhoto>
					<FeaturedWorkPhoto src={myTheme.photos.src4} alt=""></FeaturedWorkPhoto> */}
						<FeaturedWorkPhoto src={fotowork2} alt=""></FeaturedWorkPhoto>
						<FeaturedWorkPhoto src={fotowork3} alt=""></FeaturedWorkPhoto>
					</FlexWrapper>
				</FlexWrapper>
			</Container>
		</FeaturedWorkStyled>

	);
};

const FeaturedWorkStyled = styled.section`
		padding-bottom:240px;

	`

const FeaturedWorkPhoto = styled.img`
		width:612px;
	height:888px;
	object-fit:cover;
	/* display: flex; */
`
const FeaturedTop = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	margin-bottom: 80px;


`
const Title = styled.h2`
font-weight: 700;
line-height: 16px; /* 100% */
letter-spacing: 1.5px;
text-transform: uppercase;
color:${theme.colors.secondaryBg};

`
