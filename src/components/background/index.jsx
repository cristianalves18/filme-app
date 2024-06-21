
import { BackgroundImage } from "./style";
import  backgroundImage  from "../../assets/legados.webp";
export const  Background = ({children}) =>{

    return(<BackgroundImage bgImage={backgroundImage}>{children}</BackgroundImage>
    )
}