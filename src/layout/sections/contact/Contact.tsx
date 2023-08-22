import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { StyledButton } from '../../../components/StyledButton';


export const Contact = () => {
	return (
		<ContactStyled>
			<FlexWrapper direction={"column"} align={"center"}>
				<SectionTitle>Contact Me</SectionTitle>
				<ContactText>If you are looking to hire a product designer,
					I’m currently available for freelance work
				</ContactText>
				<StyledForm>
					<Field placeholder={"name"} />
					<Field placeholder={"subjects"} />
					<Field placeholder={"message"} as={"textarea"} />
					<StyledButton type={"submit"}>Send message</StyledButton>
				</StyledForm>

				<StyledButton as={"a"} >hi@yourname.com</StyledButton>
			</FlexWrapper>
		</ContactStyled>

	);
};

const ContactStyled = styled.section`
	min-height:50vh;
	background-color: #4a3f3f;

`
const ContactText = styled.p`
	
`
const StyledForm = styled.form`
	max-width:500px;
	width:100%;
	display: flex;
	flex-direction:column;

`
const Field = styled.input`

`
