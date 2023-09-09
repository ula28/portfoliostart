
type indentationPropsType ={
	Pmin?:number
	Pmax?:number
	Vmin?:number
	Vmax?:number
}


export const paddingBottom = ({Pmax, Pmin, Vmax, Vmin}: indentationPropsType) => `

padding: calc( (100vw -  ${Vmin}px)/(${Vmax}  - ${Vmin}) * (${Pmax} - ${Pmin}) + ${Pmin}px );
`