import styled from 'styled-components';
import { theme } from '../styles/Theme';

type FlexWrapperPropsType = {
	direction?: string
	justify?: string
	align?: string
	wrap?: string
	gapcolumn?: string
	gaprow?: string
	marginTop?: string
	padding?: string
	flexG?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
	display: flex;
	flex-direction:${props => props.direction || "row"};
	justify-content: ${props => props.justify || "flex-start"};
	align-items:${props => props.align || "flex-start"};
	flex-wrap:${props => props.wrap || "nowrap"};
	column-gap:${props => props.gapcolumn || "0px"};
	row-gap:${props => props.gaprow || "0px"};
	margin-top:${props => props.marginTop || "0px"};
	height: 100%;
	padding:${props=> props.padding || "0"};
	flex-grow:${props=> props.flexG || "0"};

	
@media screen and (max-width:1024px){
		max-width:100%;
		margin-top:0;
		gap:24px;
	}

	
`

