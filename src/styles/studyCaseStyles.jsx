import styled from "styled-components";
import {colors} from "../styles/colors";

export const Root= styled.div`
a{
display: flex; 
text-decoration: none;
color: ${colors.black};
justify-content: flex-end;  
gap: 10px; 
align-items: center;
margin-bottom: 10%;
@media (min-width: 400px) {
    padding: 0.3rem calc((100vw - 85vw) / 2);
    gap: 25px;
  }
}
`;

export const Picture = styled.div`
width: 100px; 
height: 100px;
@media (min-width: 426px ){
    width: 200px;
    height: 200px;
}

`;

export const Info = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 10px;
    font-weight: 700;
    font-size: 0.6rem;

`;

export const Title =  styled.div`
    font-size: 1.2rem; 

`;