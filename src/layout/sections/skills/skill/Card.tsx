import {Icon} from '../../../../components/icon/Icon';
import styled from 'styled-components';


type CardPropsType = {
	iconId : string
	title: string
	description:string


}

export const Card = (props:CardPropsType) => {
	return (
		<CardStyled>
			<Icon iconId={props.iconId} />
			<SkillTitle>{props.title}</SkillTitle>
			<SkillText>{props.description}</SkillText>
		</CardStyled>
	);
};

const CardStyled = styled.div`
	width:30%;
	/* flex-basis:33%; */
	background-color: #f7e6e6;
	margin: 10px;
	
`
const SkillText = styled.p`
	

`

const SkillTitle = styled.h3`
	

`