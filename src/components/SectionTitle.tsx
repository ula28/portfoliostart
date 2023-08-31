import styled from 'styled-components';
type SectionTitlePropsType={
mb?:string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
	text-align: center;
	margin-bottom:${props => props.mb || "66px"};
	color: #DEDEDE;
	text-align: center;
	font-size: 36px;
	font-weight: 700;
	/* line-height: normal; */
	letter-spacing: -0.5px;
`