import styled from "styled-components";

export const Container = styled.header`
 img{

    height: 60px;
   margin-left: 45px;

   @media(max-width:560px){
  height: 40px;
  margin-left: 20px;
 }
 }
 @media(max-width:560px){
  padding: 20px;
 }
  
 
  nav{

    display: flex;
    gap: 20px;
    align-items: center;
  
  }

  a{

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: white;
    transition: 0.3s;
    text-decoration: none;
    position: relative;
    text-shadow: 2px 0 10px black;

    @media(max-width:560px){
      font-size: 17px;
      margin-left: 8px;
 }
  }

  a:hover{

opacity: 0.7;
 
 
}
a:active{
opacity: 0.4;

 
}

a::after{

content: "";
width: 0;
height: 2px;
background-color: white;
position: absolute;
bottom: 2px;
left: 0;
transition: 0.3s;

}

a:hover::after{

    width:100%;
}
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px 60px;

`;