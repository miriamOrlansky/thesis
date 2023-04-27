import styled from "styled-components";
import { colors } from "./colors";

export const Root = styled.div`
padding: 0.3rem calc((100vw - 85vw) / 2);

display: flex;
flex-direction: column;
align-items: center;
max-width: 750px;
margin: 0 auto;
`;

export const Letters = styled.div`
display: grid;
grid-template-columns: repeat(10, minmax(0, 1fr));
grid-template-roq: repeat(10, minmax(0, 1fr));
grid-template-areas: 
"one one one one one one one one one one"
". . two two two two two two two two"
". . . . . three three three three three"
". four four four four four four four four four"
". . . . . five five five five five"
". . . six six six six six six six";

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
background-color: ${colors.grey};
width: 100vw;`;

export const Title = styled.div`
max-width: 750px;
margin: 0 auto;
font-size: 1 rem;
`;
export const Grid = styled.div`
max-width: 750px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(14, minmax(0, 1fr));
grid-template-rows: repeat(10, minmax(0, 1fr));
align-content: flex-start;
align-items: start;
grid-template-areas: 
  "one one one one . two two two two . three three three three"
  "one one one one . two two two two . three three three three"
  "four four four four . two two two two . three three three three"
  "four four four four . five five five five . six six six six"
  ". . . . . five five five five . six six six six"
  "seven seven seven seven . eight eight eight eight eight eight eight eight eight"
  "seven seven seven seven . eight eight eight eight eight eight eight eight eight"
  "nine nine nine nine nine nine nine nine nine nine . . . ."
  "nine nine nine nine nine nine nine nine nine nine . . . ."
  "nine nine nine nine nine nine nine nine nine nine . . . .";

  img {
    width: 100%;
    height: 100%; 
    fill: fit-cover;
  }
.one {
    grid-area: one;
};
.two {

    grid-area: two;
};
.three {
    grid-area: three;
};
.four {
    grid-area: four;
};
.five {
    grid-area: five;
};
.six {
    grid-area: six;
};
.seven{
  grid-area: seven;
};
.eight{
  grid-area: eight;
};
.nine{
  grid-area: nine;
};

`;