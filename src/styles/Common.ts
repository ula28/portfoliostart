import { theme } from "./Theme"

type fontPropsType ={
	family?:string
	weight?:number
	color?:string
	lineHeight?:number
	Fmin?: number
	Fmax?: number
	Vmax?:number
	Vmin?:number
}


export const font = ({family, weight, color, Fmin,Fmax, Vmin, Vmax, lineHeight}: fontPropsType) => `
font-family:${family || "Manrope"};
font-weight:${weight || 400};
color:${color || theme.colors.font};
line-height:${lineHeight || 1.2 };
font-size: calc( (100vw -  ${Vmin}px)/(${Vmax}  - ${Vmin}) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`