import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';




export const Testimony = () => {
	return (
		<TestimonyStyled>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction={"column"} align={"center"} gaprow={"5px"} >
				<Icon iconId={"ball"} />
				<Slider />
			</FlexWrapper>

		</TestimonyStyled>

	);
};

const TestimonyStyled = styled.section`
	background-color: #4cd5b0;
	min-height:50vh;

`

