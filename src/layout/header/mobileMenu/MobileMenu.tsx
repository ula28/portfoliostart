import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';


export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu >
			<BurgerButton isOpen={false}>
				<span></span>
			</BurgerButton>
			<MobileMenuPopup isOpen={false}>
				<ul>
					{props.menuItems.map((item: string, index: number) => {
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
			</MobileMenuPopup>
		</StyledMobileMenu>
	);
};

const StyledMobileMenu = styled.nav`
display: none;
	
	@media ${theme.media.tablet}{
		display: block;
	}
`
const MobileMenuPopup = styled.div<{isOpen:boolean}>`
position: fixed;
background-color: rgba(85, 79, 79, 0.926);
top: 0;left: 0;right: 0;bottom: 0;
z-index:99999;
display: none;

${props=>props.isOpen && css<{isOpen:boolean}>`
	display: flex;
	justify-content: center;
	align-items: center;
`}

ul{
		display: flex;
		gap:20px;
		justify-content: center;
		flex-direction:column;
		align-items: center;
		
	}



`


const BurgerButton = styled.button<{isOpen:boolean}>`
	position: fixed;
	width: 22px;
	height: 24px;
	/* top: -100px;
	right: -100px; */
	z-index:99999999;
	

	

	span{
		display: block;
		width: 21px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		top: 0;
		right: 28px;

		
	

		${props=>props.isOpen && css<{isOpen:boolean}>`
		background-color: rgba(255, 255, 255, 0);
		
	`}


		&::before,
		&::after{
			content:'';
			display: block;
		width: 21px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		
		}

		&::before{
			
		transform:translateY(-10px);

			${props=>props.isOpen && css<{isOpen:boolean}>`
				transform:rotate(-45deg) translateY(0px) ;
		
			`}
		}

		&::after{
		
		transform:translateY(10px);

			${props=>props.isOpen && css<{isOpen:boolean}>`
			transform: rotate(45deg) translateY(0px);
			`}
		}
	}
`

const Link = styled.a`
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

const ListItem = styled.li`
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

