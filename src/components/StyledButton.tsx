import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';

type StyledButtonPropsType = {
padding?:string
bg?:string
color?:string
}


export const StyledButton=styled.button<StyledButtonPropsType>`
font-size: 18px;
font-weight: 600;

line-height: normal;
display: flex;
/* text-align: center; */
/* text-transform: uppercase; */
gap: 16px;
color:${props=>props.color ||"#fff"};
align-items: center;
border-radius: 4px;
/* background-color:${props=>props.bg ||"#9D9D9D"}; */
padding:${props => props.padding || "16px 48px"};
max-width:317px;
cursor: pointer;
position: relative;
z-index: 0;



&:hover{
	&::before{
		height: 60%;
		width: 80%;
		border-radius:10px;
		color: #605a5a;

	}
}

&::before{
		position: absolute;
		content:'';
		display: inline-block;
		height: 10px;
		width: 50%;
		background-color: ${props=>props.bg ||"#9D9D9D"};;
		bottom: 10px;
		left: 50%;
		transform:translate(-50%);
		z-index: -1;
		

	}
`




