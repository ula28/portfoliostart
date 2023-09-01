import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { StyledButton } from '../../../components/StyledButton';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/Theme';
import {Container} from '../../../components/Container';


export const Contact = () => {
	return (
		<ContactStyled>
			<Container>
				<FlexWrapper direction={"column"} align={"center"} gaprow={"48px"}>
					<SectionTitle mb={"0px"}>Contact Me</SectionTitle>
					<ContactText>If you are looking to hire a product designer,
						I’m currently available for freelance work
					</ContactText>
					<StyledForm>
						<Field placeholder={"name"} />
						<Field placeholder={"subjects"} />
						<Field placeholder={"message"} as={"textarea"} />
						<StyledButton color={"#000"} padding={"10px 10px"} type={"submit"} bg={"#e3f39f"}>Send message</StyledButton>
					</StyledForm>
					<StyledButton as={"a"} >
						<Icon iconId={'email'} viewBox={"0 0 23 19"} width={"20"} height={"16"} />
						hi@yourname.com</StyledButton>
				</FlexWrapper>
			</Container>

		</ContactStyled>

	);
};

const ContactStyled = styled.section`
	
	

`
const ContactText = styled.p`
color: #959595;
text-align: center;
font-size: 26px;
font-weight: 600;
letter-spacing: -0.5px;
max-width:521px;
align-items: center;

`
const StyledForm = styled.form`
	max-width:600px;
	width:100%;
	display: flex;
	flex-direction:column;
	gap: 20px;
	justify-content: center;
	align-items: center;
	textarea{
		resize:none;
		height:155px;
	}

`
const Field = styled.input`
width: 100%;
background-color: #252527;
border:1px solid ${theme.colors.borderBg};
padding:7px 15px;
color:${theme.colors.font};
font-size: 14px;
font-weight: 500;
font-family: Manrope;
&::placeholder{
	color:${theme.colors.placeholderBg};
	text-transform: capitalize;
}
&:focus-visible{
	outline:1px solid ${theme.colors.borderBg};
}

`
