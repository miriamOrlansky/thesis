import styled from "styled-components";
import { colors } from "./colors";


export const Root = styled.div`

`;

export const Transition = styled.div`
color: ${colors.white};
font-weight: 700;
font-size: 0.8rem;
@media (min-width: 436px){
    font-size: 1.5rem;
}
@media (min-width: 768px){
    font-size: 1.7rem;
}
@media (min-width:1050px ){
    font-size: 2.8rem;
}`;
