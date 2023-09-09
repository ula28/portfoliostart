import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

import fotowork from '../../../assets/img/prog1.webp';
import fotowork1 from '../../../assets/img/prog2.webp';
import fotowork2 from '../../../assets/img/prog3.webp';
import fotowork3 from '../../../assets/img/prog4.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import {useWindowSize} from '../../../styles/useWindowSize'




export const FeaturedWork = () => {
	const { width } = useWindowSize()
	console.log(width)
	return (
		<FeaturedWorkStyled>
			<Container>
				<FeaturedTop>
					<a href="">
						<Icon iconId={'arrow'} viewBox={"0 0 16 33"} width={"16"} height={"33"} />
					</a>
					<Title>Featured Work</Title>
				</FeaturedTop>
				<FlexWrapper align={"start"} gapcolumn={"10px"} wrap={width < 1024 ? 'wrap' : undefined}>
					{/* <FeaturedBoxTop> */}
					{/* <FeaturedWorkPhoto src={myTheme.photos.src1} alt=""></FeaturedWorkPhoto>
					<FeaturedWorkPhoto src={myTheme.photos.src2} alt=""></FeaturedWorkPhoto> */}
					<FeaturedBoxTop>
						<FlexWrapper direction={"column"} gaprow={"10px"} >
							<FeaturedWorkPhoto src={fotowork} alt=""></FeaturedWorkPhoto>
							<FeaturedWorkPhoto src={fotowork1} alt=""></FeaturedWorkPhoto>
						</FlexWrapper>
					</FeaturedBoxTop>

					<FeaturedBoxBottom>
						<FlexWrapper direction={"column"} gaprow={"10px"} marginTop={"140px"} >
							{/* <FeaturedWorkPhoto src={myTheme.photos.src3} alt=""></FeaturedWorkPhoto>
					<FeaturedWorkPhoto src={myTheme.photos.src4} alt=""></FeaturedWorkPhoto> */}
							<FeaturedWorkPhoto src={fotowork2} alt=""></FeaturedWorkPhoto>
							<FeaturedWorkPhoto src={fotowork3} alt=""></FeaturedWorkPhoto>
						</FlexWrapper>
					</FeaturedBoxBottom>
				</FlexWrapper>
			</Container>
		</FeaturedWorkStyled>

	);
};

const FeaturedWorkStyled = styled.section`
		/* padding-bottom:240px; */
		@media ${theme.media.mobile}{
			padding-bottom: 116px;
		}
	`
const FeaturedBoxTop = styled.div`
	max-width:612px;
	width:100%;
	display: flex;
justify-items:center;
	/* flex:1 0 auto; */
`
const FeaturedBoxBottom = styled.div`
	max-width:612px;
	width:100%;


	/* flex:1 0 auto; */
`

const FeaturedWorkPhoto = styled.img`
		width: 100%;
		height:888px;
		object-fit:cover;
		/* display: flex; */
		@media ${theme.media.mobile}{
			width:366px;
		height:600px;
		}
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

@media ${theme.media.tablet}{
		
	} 
@media ${theme.media.mobile}{
		font-size: 18px;
		font-weight: 600;
		text-transform: lowercase;
	} 

`
