import styled from "styled-components";   

type CardWorkPropsType = {
	src: string
	title: string
	text: string
};

export const CardWork = (props:CardWorkPropsType) => {
	return (
		<StyledWork>
			<Img src={props.src} alt=""/>
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<Link href={"#"}>Demo</Link>
			<Link href={"#"}>Code</Link>
		</StyledWork>

	);
};

const StyledWork = styled.div`
	background-color: #6584b5;
	max-width:540px;
	width: 100%;
`
const Img = styled.img`
width: 100%;
height: 260px;
object-fit:cover;
	
`
const Title = styled.h3`
	
`
const Text = styled.p`
	
`
const Link = styled.a`
	
`