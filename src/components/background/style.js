import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media(max-width:560px){
    height: 83vh;
}

 
`;
export const BackgroundGradient = styled.div`

background: linear-gradient(to top, black 65%, transparent 100%);

`;

