import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/photo.jpg';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon';
import { StyledButton } from '../../../components/StyledButton';



export const Main = () => {
	return (
		<StyledMain>
			<Container>
				< FlexWrapper align={"center"} justify={"space-around"} gapcolumn={"20px"}>
					<MainLeft>
						<Name>Hi, I am Yuliia
							A Product Designer based in City.</Name>
						< MainText>I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.
						</ MainText>

						<StyledButton as={"a"} >
						<Icon iconId={'email'} viewBox={"0 0 23 19"} width={"20"} height={"16"} />
						ula24499@gmail.com
						</StyledButton>
					</MainLeft>
					<Photo src={photo} alt=""></Photo>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	min-height : 80vh;
	/* background-color: #b9c6a4; */
	display: flex;

`
const MainLeft = styled.div`
	

`

const Name = styled.h2`
	font-size: 54px;
font-weight: 700;
/* line-height: 64px; 118.519% */
/* max-width:824px; */


`
const MainText = styled.p`
	color: #959595;
font-size: 20px;
font-weight: 600;
letter-spacing: -0.5px;
line-height: 30px; /* 150% */
margin:24px 0 88px 0;
`


const Photo = styled.img`
	flex:0 0 400px;
	height:400px;
	object-fit:cover;
	border-radius:50%;
`