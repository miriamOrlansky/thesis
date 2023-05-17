import styled from "styled-components";
import { colors } from "../styles/colors";

export const Root = styled.div`
  background-color: ${colors.white};
`;

export const TitleSection = styled.div`
  background-color: ${(props) => props.backColor};
  color: ${colors.white};
  text-align: center;
  padding: 3rem calc((100vw - 90vw) / 2);
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  @media (min-width: 600px) {
    font-size: 68px;
  }
`;

export const Subtitle = styled.div`
  font-weight: 600;
`;

export const Row = styled.div`
  padding: 0.3rem calc((100vw - 90vw) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  justify-content: center;
  :last-of-type {
    padding-bottom: 3rem;
  }
  img {
    width: 45%;
  }

  .thin {
    font-weight: 200;
  }
  .medium {
    font-weight: 500;
  }
  .thick {
    font-weight: 800;
    font-family: "Raleway", sans-serif;
  }
  .extraSmall {
    font-size: 12px;
  }
  .tiny {
    font-size: 9px;
  }
  .small {
    font-size: 14px;
  }
  .regular {
    font-size: 20px;
  }
  .large {
    font-size: 24px;
  }
  .extraLarge {
    font-size: 30px;
  }
  .top {
    margin-top: 80px;
  }
  .purple {
    color: #778efc;
  }
  .center {
    text-align: center;
  }
  .third {
    width: 60vw;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    image {
      width: 70vw;
    }
    .extraSmall {
      font-size: 14px;
    }
    .small {
      font-size: 16px;
    }
    .regular {
      font-size: 22px;
    }
    .large {
      font-size: 26px;
    }
    .extraLarge {
      font-size: 32px;
    }
    .third {
      width: 20vw;
    }
    .fourth {
      width: 15vw;
    }
  }

  @media (min-width: 1000px) {
    .extraSmall {
      font-size: 16px;
    }
    .small {
      font-size: 18px;
    }
    .regular {
      font-size: 24px;
    }
    .large {
      font-size: 28px;
    }
    .extraLarge {
      font-size: 34px;
    }
  }
`;
