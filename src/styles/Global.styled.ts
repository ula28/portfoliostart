import { createGlobalStyle } from "styled-components";
import  {theme}  from './Theme';

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: Tchicccboi; 
	src: local('Tchicccboi'),
	url(./assets/fonts/THICCCBOI-Bold.eot?) format("eot"),
	url(./assets/fonts/THICCCBOI-Bold.woff2) format("woff2"),
	url(./assets/fonts/THICCCBOI-Bold.ttf) format("truetype"),;
	font-weight:bold;
	font-style:normal;
	font-display:swap;
}
*,
*::before,
*::after {
	padding: 0px;
	margin: 0px;
	border: 0px;
	box-sizing: border-box;
}


body {
  margin: 0;
  font-family: 'Manrope',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:${theme.colors.font};
  line-height:1.2;

}

a {
	color: inherit;
	text-decoration: none;
	transition: color 0.3s ease 0s;
}
ul li {
	list-style: none;
}
button {
	cursor: pointer;
	color: inherit;
	background-color: transparent;

}

section{
	background-color: ${theme.colors.primaryBg};

&:nth-of-type(n + 2){
	padding-bottom:240px;

	@media ${theme.media.mobile}{
			padding-bottom: 116px;
		}
	}
&:last-of-type{
		padding-bottom:125px;
	}
}

h3{

}

p{
	font-size:16px;
	line-height:1.4;
}


`

