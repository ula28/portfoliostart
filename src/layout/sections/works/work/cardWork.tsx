import styled from "styled-components"; 
import {Link} from '../../../../components/Link';
import { StyledButton } from "../../../../components/StyledButton";


type CardWorkPropsType = {
	src: string
	title: string
	text: string
};

export const CardWork = (props:CardWorkPropsType) => {
	return (
		<StyledWork>
			<ImgWrapper>
				<Img src={props.src} alt=""/>
				<StyledButton>view project</StyledButton>
			</ImgWrapper>
			<Description>
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>			
			<Link href="#">demo</Link>
			<Link href="#">code</Link>
			</Description>
			
		</StyledWork>

	);
};


const StyledWork = styled.div`
	background-color: #908943;
	max-width:540px;
	width: 100%;
	
	${Link} {
	padding: 10px 0;

	& + ${Link}{
		margin-left: 20px;
	}
	}
`
const Description = styled.div`
	padding: 25px 20px;
` 
const Img = styled.img`
width: 100%;
height: 260px;
object-fit:cover;
`
const ImgWrapper = styled.div`
	position: relative;
	transition:0.3s;

	&:hover{
			&::before{
		content:'';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right:0;
		background: rgba(0, 0, 0, 0.30);
		backdrop-filter: blur(4px);
		}
		${StyledButton}{
			visibility:visible;
		}			
	}

	${StyledButton}{
				visibility:hidden;
				position: absolute;
				top:50%;
				left:50%;
				transform:translate(-50%, -50%);
				&::before{
					height: 60%;
					width: 80%;
					border-radius:10px;
				}
			}




`
const Title = styled.h3`

	
`
const Text = styled.p`
	margin: 14px 0 10px;
`
