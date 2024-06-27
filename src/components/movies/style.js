import styled from "styled-components";

export const Container = styled.div`

width:100%;
padding: 20px 60px;

@media (max-width:560px) {
    padding: 12px;
}



.react-multi-carousel-list{  // class carrosel é dessa forma
background: rgba(103, 101, 113, 0.34) ;
border: 1px solid rgba(255, 255, 255, 0.14);
border-radius: 24px;
backdrop-filter: blur(10px);

& li{
display: flex;
align-items: center;
padding:8px ;




}

}
`;

export const Text = styled.p`
font-weight: 500;
font-size: 20px;
line-height:30px ;
margin: 12px 0px;
color: white;

`;

export const Movie = styled.img`



height:290px;
width:200px;
cursor: pointer;
border-radius: 20px;



transform:scale(0.9);  // efeito  ..
transition: 0.3s;

&:hover{

    transform: scale(1);// efeito no filme ao passar 
}
`;
