import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/photo.jpg';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon';
import { StyledButton } from '../../../components/StyledButton';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';




export const Main = () => {
	return (
		<StyledMain>
			<Container>
				< FlexWrapper align={"start"} justify={"space-around"} gapcolumn={"20px"} wrap={"wrap-reverse"} padding={"150px 0 0 0"}>
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
	padding-bottom: 160px;

	@media ${theme.media.mobile}{
		padding-bottom: 130px;
	} 

`

const MainLeft = styled.div`
	max-width:500px;
	display: flex;
	flex-direction:column;
	align-items:start;
	/* justify-content: center; */

	@media screen and (max-width:889px){
		align-items:center;
	}
	
	
	
	@media ${theme.media.mobile}{ 
		padding: 0 10px;
		align-items: center;

	}	

`

const Name = styled.h2`
${font({ weight: 700, Fmax: 54, Fmin: 30, Vmax: 1440, Vmin: 360 })}
text-align: start;
	/* font-size: 54px;
	font-weight: 700; */
	/* line-height: 64px; 118.519% */
	/* max-width:824px; */
	@media screen and (max-width:889px){
		text-align:center;
	}



`
const MainText = styled.p`

${font({ weight: 600, color: '#959595', Fmax: 20, Fmin: 18, Vmax: 1440, Vmin: 360, lineHeight:1.3 })}
letter-spacing: -0.5px;
margin:24px 0 88px 0;
text-align: start;
max-width:380px;
		width: 100%;

@media ${theme.media.tablet}{
	margin: 20px 0 35px;
		font-weight: 500;
		text-align: center;
		
	}


@media ${theme.media.mobile}{
	/* text-align: start; */
		max-width:366px;
		width: 100%;
		font-weight: 400;
	} 

`





const Photo = styled.img`
	flex:0 0 400px;
	/* width:400px; */
	/* width:100%; */
	max-height:400px;
	object-fit:cover;
	border-radius:50%;
 
	@media screen and (max-width:1205px){
		flex:0 0 340px;
		/* width:340px; */
		max-height:340px;
		margin-bottom: 64px;
	} 
	

	@media ${theme.media.mobile}{
		flex:0 0 240px;
		width:240px;
		max-height:240px;
	}
`