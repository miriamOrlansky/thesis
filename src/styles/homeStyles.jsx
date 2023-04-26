import styled from "styled-components";
import {colors} from "../styles/colors";

export const Root = styled.div`
max-width: 1050px;
margin: 0 auto;
padding-bottom: 100px;
font-weight: 500;
font-size: 1.1rem;;
padding: 0.3rem calc((100vw - 85vw) / 2);
display: flex;
flex-direction: column;
gap: 20%;
margin-top: 70px;
color: ${colors.black};
`;

export const SectionOne = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20%;
`;

export const SectionTwo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 20%;
`;
export const Title = styled.div`
display: flex;
flex-direction: column;
font-weight: 700;
font-size: 4rem;

`;

export const Subtitle = styled.div`
margin-top: 30px;
font-size: 1.5rem;
`;

export const Picture = styled.div`
display: none; 
overflow: hidden; 
@media (min-width: 768px){
    display: block;
    flex-shrink: 2;
}
`;