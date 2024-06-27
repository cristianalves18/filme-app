import { Container } from "./style";
import logoImage from '../../assets/logo.png' 

export const Header = () => {
    return (
        <Container>
            <img src={logoImage} alt="logo"></img>


            <nav>
                <a href="#movies">Movies</a>
                <a href="#tvShows">Tv shows</a>
                <a href="#All">All</a>
            </nav>
        </Container>
    )


}