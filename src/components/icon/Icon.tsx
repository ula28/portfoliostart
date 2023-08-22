import React from 'react';
import styled from 'styled-components';
import iconsSprite from '../../assets/img/icons-sprite.svg';



type IconPropsType={
	iconId : string
	width?: string
	height?:string
	viewBox?:string
}

export const Icon = (props:IconPropsType ) => {
	return (	
		
			<svg width={props.width ||"22"} height={props.height ||"22"}  viewBox={props.viewBox ||"0 0 22 22"}  fill="none" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={`${iconsSprite}#${props.iconId}`}/>	
			</svg>

	
			
		
	);
};