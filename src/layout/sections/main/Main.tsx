import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/photo.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper'
import { StyledButton } from '../../../components/StyledButton';


export const Main = () => {
	return (
		<StyledMain>
			< FlexWrapper align={"center"} justify={"space-around"}>
				<div>
					<Name>Hi, I am Your NameA Product Designer based in City.</Name>
					< MainText>I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.
					</ MainText>
					<StyledButton as={"a"} >hi@yourname.com</StyledButton>

				</div>
				<div>
					<Photo src={photo} alt=""></Photo>
				</div>
			</ FlexWrapper>
		</StyledMain>
	);
};

const StyledMain = styled.div`
	min-height : 100vh;
	background-color: #b9c6a4;

`
const Name = styled.h2`
	

`
const MainText = styled.p`
	
`


const Photo = styled.img`
	width:400px;
	height:400px;
	object-fit:cover;
	border-radius:50%;
`