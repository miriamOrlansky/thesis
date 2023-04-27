import styled from "styled-components";
import { colors } from "./colors";

export const Root = styled.div`
padding: 0.3rem calc((100vw - 85vw) / 2);
max-width: 750px;
margin: 0 auto;
display: flex;
align-items: center;
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