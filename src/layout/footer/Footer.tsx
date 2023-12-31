import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';


export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FlexWrapper justify={"space-around"} gapcolumn={"25px"} wrap={"wrap-reverse"} >
					<FooterBox>
						<FooterText>Made by <span> Your Name</span></FooterText>
						<Copyright>— Copyright 2021</Copyright>
					</FooterBox>
					<SocialList>
						<SocialItem><SocialLink><Icon iconId={"whatsApp"} /></SocialLink></SocialItem>
						<SocialItem><SocialLink><Icon iconId={"ball"} /></SocialLink></SocialItem>
						<SocialItem><SocialLink><Icon iconId={"in"}/></SocialLink></SocialItem>
						<SocialItem><SocialLink><Icon iconId={"twitter"} width={"28"} viewBox={"0 0 28 22"} /></SocialLink></SocialItem>
						<SocialItem><SocialLink><Icon iconId={"be"} viewBox={"0 0 30 18"} width={"30"} height={"18"}  /></SocialLink></SocialItem>
					</SocialList>
				</FlexWrapper>
			</Container>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
background-color: #202020;
border-top:1px solid #696969;;
padding:48px 0 36px 0;
font-weight: 600;
letter-spacing: -0.5px;
@media ${theme.media.mobile}{
	padding:48px 0 66px 0;
	
}
`

const FooterText = styled.p`
	
	span{
		color:${theme.colors.font};

	}

`
const SocialList = styled.ul`
display: flex;
column-gap:43px;
align-items: center;
justify-content: space-between;
@media ${theme.media.mobile}{
	column-gap:32px;
	padding-bottom:10px;
}


`
const SocialItem = styled.li`
	
`

const SocialLink = styled.a`
	
`
const FooterBox = styled.div`
display: flex;
align-items: center;
gap: 5px;
color:#959595;

@media screen and (max-width:596px){

}
	
`
const Copyright = styled.small`

	
`