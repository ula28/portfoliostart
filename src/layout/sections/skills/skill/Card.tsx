import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';


type CardPropsType = {
	iconId: string
	title: string
	description: string
	width?:string
	height?:string
	viewBox?:string


}

export const Card = (props: CardPropsType) => {
	return (

		<CardStyled>
			<FlexWrapper direction={"column"} align={"center"} justify={"center"}>
				<IconWrapper>
						<Icon iconId={props.iconId} width={props.width} viewBox={props.viewBox} height={props.height}   />
				</IconWrapper>	
			<SkillTitle>{props.title}</SkillTitle>
			<SkillText>{props.description}</SkillText>
		</FlexWrapper>
			</CardStyled >
		
	);
};

const CardStyled = styled.div`
	width:380px;
	padding:60px 20px 40px;	
`
const SkillText = styled.p`
	text-align: center;
	line-height:1.4;

`

const SkillTitle = styled.h3`
	margin: 50px 0 15px 0;

`
const IconWrapper = styled.div`
	position: relative;

	&::before{
		content:'';
		position: absolute;
		display: inline-block;
		width: 70px;
		height: 70px;
		transform:rotate(45deg);
		background-color: rgba(155, 53, 53, 0.427);
	 /* left: 50%;
	top: 50%; */
	/* transform-origin: top left;	  */
	}


`