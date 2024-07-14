//import type { FunctionComponent, FC } from 'react';
// importante definir un type para especificar tipos a las props
type Props = {alt:string, image:string};
//forma explicita (estandar) , agregar explicitamente el tipado con destructuring
export const RandomFox = ({ alt,image }: Props):JSX.Element => {
    return <img alt={alt} width="320" height="auto" src={image} className="rounded"/>
}

























//1ro typescript > 2do javascript
// export const RandomFox = ()=> {
//     return <img />
// }

// export const RandomFox = ():FunctionComponent => {
//     return <img />
// }

// export const RandomFox = ():FC => {
//     return <img />
// }