import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from '../../../layout/sections/skills/skill/Card';




export const Testimony = () => {
	return (
		<TestimonyStyled>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction={"column"} align={"center"} gaprow={"5px"} >
				
			<IconWrapper>
				<Icon iconId={"ball"} />
			</IconWrapper>
			
				<Slider />
			</FlexWrapper>

		</TestimonyStyled>

	);
};

const TestimonyStyled = styled.section`
	background-color: #4cd5b0;

	${IconWrapper} {
		margin: 20px 0 72px;
	}

`

