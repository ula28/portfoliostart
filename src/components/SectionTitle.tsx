import styled from 'styled-components';
import { font } from '../styles/Common';
type SectionTitlePropsType={
mb?:string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
	text-align: center;
	margin-bottom:${props => props.mb || "66px"};
	color: #DEDEDE;
	text-align: center;
	${font({ weight: 700, Fmax: 36, Fmin: 28, Vmax: 1440, Vmin: 360 })}
	/* line-height: normal; */
	letter-spacing: -0.5px;
	position: relative;

	&::before{
		content:'';
		position: absolute;
		display: inline-block;
		width:200px;
		height: 2px;
		background-color: #fff;
		border-radius:25%;
		right:0;
		bottom: -15px;
		left: 50%;
		transform:translate(-50%, -50%);


	}
	
`