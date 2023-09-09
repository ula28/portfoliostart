import styled from 'styled-components';

export const Link = styled.a`
	position: relative;
	/* padding: 10px; */
	z-index:0;
	letter-spacing:1px;
	font-size: 16px;
	padding: 5px;
	
	&:hover{
		&::before{
			height:5px;
		}
	}
	
	&::before{
		content:'';
		display: inline-block;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 5px;
		/* height: 5px; */
		background-color: #6584b5;
		z-index:-1;
	}
	

`