import styled from "styled-components";


export const Container = styled.div`

width: 530px;
padding: 50px 60px 80px;
display:flex;
flex-direction: column;

@media(max-width:560px){
  width: 100%;
  padding: 20px;
  align-items: center;
  text-align: center;
 }

  img{
    height: 130px;
    width: 400px;

    @media(max-width:560px){
    height: 100px;
    width:350px;
  
}
  }
`;
export const Description = styled.p`
color:white;
opacity: 0.7;
margin-top: -10px;

`;

export const Title = styled.h1`
color: white;
font-size:50px;
line-height: 50px;
font-weight: 900;
margin-bottom: 20px;
`;

export const Button = styled.button`
width:200px;
height:50px;
background: red;
color: white;
border: none;
border-radius: 48px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 16px;

font-size: 16px;
font-weight: 600;
transition: 0ms.3s;

&:hover{

opacity: 0.8;
cursor: pointer;
}
&:active{

opacity: 0.4;

}
`;





