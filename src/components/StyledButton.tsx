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
gap: 16px;
color:${props=>props.color ||"#fff"};
align-items: center;
border-radius: 4px;
background-color:${props=>props.bg ||"#9D9D9D"};
padding:${props => props.padding || "16px 48px"};
max-width:317px;
cursor: pointer;
`




