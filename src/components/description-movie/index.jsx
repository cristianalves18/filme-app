
import * as C from "./style"

import { PiPlayFill } from "react-icons/pi";

export const DescriptionMovie = ({ title, description, handleOpenPlayVideo }) => {

    return (
        <C.Container>



            <C.Title> {title} </C.Title>

            <C.Description><i>{description}</i></C.Description>

            <C.Button onClick={handleOpenPlayVideo}><PiPlayFill size={20} /> Treiler</C.Button>


        </C.Container>

    )

}