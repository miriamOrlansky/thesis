import styled from "styled-components";
import { colors } from "./colors";
import Img1 from '../Images/img1.png';
import Img2 from '../Images/img2.png';
import Img3 from '../Images/img3.png';
import Img4 from '../Images/img4.png';
import Img5 from '../Images/img5.png';
import Img6 from '../Images/img6.png';
import Img7 from '../Images/img7.png';
import Img8 from '../Images/img8.png';
import Img9 from '../Images/img9.png';
import baking1 from '../Images/baking1.png';
import baking2 from '../Images/baking2.png';
import baking3 from '../Images/baking3.png';
import baking4 from '../Images/baking4.png';
import baking5 from '../Images/baking5.png';
import baking6 from '../Images/baking6.png';
import baking7 from '../Images/baking7.png';
import baking8 from '../Images/baking8.png';
import baking9 from '../Images/baking9.png';
export const Root = styled.div`
padding: 0.3rem calc((100vw - 85vw) / 2);
display: flex;
flex-direction: column;
align-items: center;
max-width: 900px;
margin: 0 auto;
`;

export const Letters = styled.div`
display: grid;
grid-template-columns: repeat(10, minmax(0, 1fr));
grid-template-row: repeat(11, minmax(0, 1fr));
grid-template-areas: 
"one one one one one one one one one one"
". . two two two two two two two two"
". . . . . three three three three three"
". four four four four four four four four four"
". . . . . five five five five five"
". . . six six six six six six six"
". . . . . . . . . ."
;


.one {
    grid-area: one;
}
.two {
    grid-area: two;
}
.three {
    grid-area: three;
}
.four {
    grid-area: four;
}
.five {
    grid-area: five;
}
.six {
    grid-area: six;
  
}

`;

export const DownArrow = styled.div`

`;

export const Art = styled.div`
margin-top: 20%;
padding-top: 100px;
padding-bottom: 100px;
background-color: ${colors.grey};
width: 100vw;`;

export const Baking = styled.div`
padding-top: 100px;
padding-bottom: 100px;

background-color: ${colors.white};
width: 100vw;`;

export const Line1 = styled.div`

    height: 10px;
    width: 100vw;
    color: ${colors.grey};
    `;
export const Line2 =styled.div`

    height: 20px;
    width: 100vw;
    color: ${colors.pink};

`;

export const GalleryArt = styled.div`
max-width: 750px;
margin: 0 auto;
font-size: 1 rem;
.title {
    padding-left: 24px;
    padding-bottom: 10px;
    color: ${colors.black};
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 3px;
    text-decoration-color: ${colors.pinkLight};
    font-weight: 600;
}
.image-grid {
    padding: 12px;
}
  
.image-row {
    display: flex; 
    .image {
    margin: 12px;
    height: 240px;  
    }
}
.image { 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.image-01 {
    background-image: URL(${Img3}); 
    flex: 1;  
}
.image-02 {
    background-image: URL(${Img2});  
    flex: 1;  
}
.image-03 {
    background-image: URL(${Img1}); 
    flex: 2;  
}
.image-04 {
    background-image: URL(${Img9}); 
    flex: 1;
}
.image-05 {
    background-image: URL(${Img8}); 
    flex: 2;
}
.image-06 {
    background-image: URL(${Img6}); 
    flex: 2;
}
.image-07 {
    background-image: URL(${Img7}); 
    flex: 1;
}
.image-08 {
    background-image: URL(${Img5}); 
    flex: 3;
}
.image-09 {
    background-image: URL(${Img4});  
    flex: 1;
}
@media screen and (max-width: 426px) {
    .image-row {
        flex-direction: column;
}
.image-row .image {
    flex-basis: auto;
}
`;
export const GalleryBaking = styled.div`
max-width: 750px;
margin: 0 auto;
font-size: 1 rem;
.title {
    padding-right: 24px;
    padding-bottom: 10px;
    color: ${colors.black};
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 3px;
    text-decoration-color: ${colors.black};
    font-weight: 600;
    text-align: right;
}
.image-grid {
    padding: 12px;
}
  
.image-row {
    display: flex; 
    .image {
    margin: 12px;
    height: 240px;  
    }
}
.image { 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.image-01 {
    background-image: URL(${baking3}); 
    flex: 1;  
}
.image-02 {
    background-image: URL(${baking2});  
    flex: 1;  
}
.image-03 {
    background-image: URL(${baking7}); 
    flex: 2;  
}
.image-04 {
    background-image: URL(${baking9}); 
    flex: 1;
}
.image-05 {
    background-image: URL(${baking1}); 
    flex: 2;
}
.image-06 {
    background-image: URL(${baking6}); 
    flex: 2;
}
.image-07 {
    background-image: URL(${baking7}); 
    flex: 1;
}
.image-08 {
    background-image: URL(${baking5}); 
    flex: 3;
}
.image-09 {
    background-image: URL(${baking4});  
    flex: 1;
}
@media screen and (max-width: 426px) {
    .image-row {
        flex-direction: column;
}
.image-row .image {
    flex-basis: auto;
}
`;