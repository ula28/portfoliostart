import styled from "styled-components"
import { theme } from "../styles/Theme"

export  const Container = styled.div`
max-width:1250px;
width: 100%;
/* height: 100%; */
padding: 0 15px;
margin: 0 auto;
outline:1px solid;

@media ${theme.media.mobile}{
	padding: 0 24px;
	}
`