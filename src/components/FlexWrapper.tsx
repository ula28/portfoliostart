import styled from 'styled-components';

type FlexWrapperPropsType = {
	direction?: string
	justify?: string
	align?: string
	wrap?: string
	gapcolumn?: string
	gaprow?: string
	marginTop?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
	display: flex;
	flex-direction:${props => props.direction || "row"};
	justify-content: ${props => props.justify || "flex-start"};
	align-items:${props => props.align || "stretch"};
	flex-wrap:${props => props.wrap || "nowrap"};
	column-gap:${props => props.gapcolumn || "10px"};
	row-gap:${props => props.gaprow || "10px"};
	margin-top:${props => props.marginTop || "0px"};
`

