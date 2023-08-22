import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/logo/menu/Menu';

export const Header = () => {
	return (
		<div>
			<StyledHeader>
				<Logo />
				<Menu/>
				
			</StyledHeader>

		</div>
	);
};

const StyledHeader = styled.header`
	background-color: #d3a3a3;
	display: flex;
	align-items: center;
	justify-content: space-between;

`
