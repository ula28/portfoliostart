import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { theme } from '../../styles/Theme';
import { HeaderMenu } from './headerMenu.tsx/HeaderMenu';

const items = ["Home", "Work", "Contact"]

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify={"space-between"} align={"center"}>
					<Logo />
					<HeaderMenu menuItems={items} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background-color: ${theme.colors.accent};
	padding: 20px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index:99999;

`
