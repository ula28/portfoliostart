import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon';


export const Footer = () => {
	return (	
		<StyledFooter>
			<FooterBox>
				<FooterText>Made by <span>Your Name</span></FooterText>
				<Copyright>— Copyright 2021</Copyright>
			</FooterBox>
			<SocialList>
				<SocialItem><SocialLink><Icon iconId={"whatsup"}/></SocialLink></SocialItem>
				<SocialItem><SocialLink><Icon iconId={"ball"}/></SocialLink></SocialItem>
				<SocialItem><SocialLink><Icon iconId={"in"}/></SocialLink></SocialItem>
				<SocialItem><SocialLink><Icon iconId={"twitter"}/></SocialLink></SocialItem>
				<SocialItem><SocialLink><Icon iconId={"be"}/></SocialLink></SocialItem>
			</SocialList>
		</StyledFooter>
	);
};

const StyledFooter =styled.footer`
background-color: #c39696;
display: flex;
justify-content: space-between;

`

const FooterText = styled.p`
	
`
const SocialList= styled.ul`
display: flex;
gap:5px;
align-items: center;
justify-content: space-between;

`
const SocialItem = styled.li`
	
`

const SocialLink= styled.a`
	
`
const FooterBox= styled.div`
display: flex;
align-items: center;
gap: 5px;
	
`
const Copyright = styled.small`

	
`