import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../FlexWrapper';


export const Slider = () => {
	return (
		<StyledSlider>
			<FlexWrapper>
				<Slide>
					<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
					<Name>@ivan ivanow</Name>
				</Slide>
			</FlexWrapper>
			<Pagination>
				<span></span>
				<span className={"active"}></span>
				<span></span>
			</Pagination>
		</StyledSlider>
	);
};

export const StyledSlider = styled.div`
/* border:1px solid; */
max-width:500px;
display: flex;
flex-direction:column;
align-items: center;
row-gap:5px;
justify-content: center;


`
export const Slide = styled.div`

text-align: center;

`
export const Text = styled.p`


`
export const Name = styled.span`
margin: 22px 0;
display: inline-block;


`
export const Pagination = styled.div`
display: flex;
column-gap:5px;
align-items: center;

span{
	/* display: inline-block; */
	width: 7px;
	height: 7px;
background-color: #75ee9b;
border-radius:20px;

/* & + span {
	margin-left: 5px;
} */
&.active{
	background-color: ${theme.colors.accent};
	width: 20px;
		}
}


`


