import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item: string, index:number) => {
					return <ListItem key={index}>
						<Link href="">{item}
						<Mask>
							<span>
								{item}
							</span>
						</Mask>
						<Mask>
							<span>
								{item}
							</span>
						</Mask>
						</Link>
					</ListItem>
				})}
			</ul>
		</StyledHeaderMenu>
	);
};

const StyledHeaderMenu = styled.nav`
	ul{
		display: flex;
		gap:20px;
		justify-content: center;
	}
	@media ${theme.media.tablet}{
		display: none;
	}
`

const Link =styled.a`
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.5px;
color:transparent
`
const Mask = styled.span`
	position: absolute;
top:0;
left: 0;
display: inline-block;
height: 50%;
overflow:hidden;
/* outline:1px solid red; */
color:#e3f39f;

& + & {
	top:50%;
	span{
		display: inline-block;
		transform:translateY(-50%);	}
}
`

const ListItem =styled.li`
	position: relative;
transition: hover 0.3s;
	&::before{
		content:'';
		display: inline-block;
		height: 2px;
		background-color:#e3f39f;
		position: absolute;
		top:50%;
		left:-5px;
		right:-5px;
		z-index:1;
		transform:scale(0);
		/* visibility:hidden;  */
		/* opacity:0; */
	}

	&:hover{
		&::before{
			transform:scale(1);
			/* visibility:visible;  */
		/* opacity:1; */
		}
			${Mask}{
		transform:skewX(12deg) translateX(5px);
		color:${theme.colors.font};

			& + ${Mask} {
				transform:skewX(12deg) translateX(-5px);
			}
		}
	}
	
	
	
`

