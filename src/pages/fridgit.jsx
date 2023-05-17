import {
  Root,
  TitleSection,
  Title,
  Subtitle,
  Row,
} from "../styles/pagesStyles";
import personas from "../Images/personas.png";
import journey from "../Images/journeyFridgIt.png";
import sketch1 from "../Images/sketch1.jpg";
import sketch2 from "../Images/sketch2.jpg";
import sketch3 from "../Images/sketch3.jpg";
import sketch4 from "../Images/sketch4.jpg";
export default function FridgIt() {
  return (
    <Root>
      <TitleSection backColor="#AAE208">
        <Title>Fridg-It</Title>
        <Subtitle>A fun way to organize your kitchen life</Subtitle>
      </TitleSection>

      <Row>
        <div>
          <div className="thick large">Class Project</div>
          <div className="thin small">
            <div>
              Problem: Lack of home organization, lack of time, boredom while
              cooking
            </div>
            <div>Role: Sole Designer</div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="thick regular">Final Prototype</div>
      </Row>
      <Row>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
          width="600"
          height="337.66"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3pNgPA3INnIdGQiWkHrc66%2FFridg-It%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D271-4233%26viewport%3D80%252C253%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A93"
          allowfullscreen
        ></iframe>
      </Row>
      <Row>
        {" "}
        <div className="thick regular">User Development</div>
      </Row>
      <Row>
        <div>
          <div className="thick small">Personas</div>
          <div className="thin small">
            <div>
              Primary Persona: Alicia - mom striving to provide for her young
              sons
            </div>
            <div>
              Secondary Persona: Michael - a child who is bored while his mother
              is preparing dinner
            </div>
            <div>Persona Development</div>
            <div>
              Each persona includes demographics, values & behaviors, and needs
              & goals.
            </div>
            <div>
              Alicia's needs: organization, ease of access, online shopping
            </div>
            <div>Michael's needs: Entertainment</div>
          </div>
        </div>
        <img src={personas} alt="Personas" />
      </Row>
      <Row>
        <div>
          <div className="thick small">User Journey</div>
          <div className="thin small">
            <div>
              I mapped out the users’ steps to see how I could clarify their
              journey to ensure that the product meets all the needs of the
              user.
            </div>
            <div>User Journey Development</div>
            <div>
              The steps of the user journey were determined by breaking down the
              users' general weekly experiences to portray a picture of their
              general emotions and thoughts.
            </div>
          </div>
        </div>
        <img src={journey} alt="journey" />
      </Row>
      <Row>
        {" "}
        <div className="thick regular">Design Development</div>
      </Row>
      <Row>
        <div>
          <div className="thick small">Sketches</div>
          <div>
            Flow charts - make sure everything is well connected and the user
            can navigate easily.
          </div>
          <div>
            I used a horizontal layout for this design to allow the user to see
            full-screen recipes and videos, as well as to create an open and
            free interface with space in between the elements
          </div>
        </div>
      </Row>

      <Row>
        <img src={sketch1} alt="sketch1" />
        <img src={sketch2} alt="sketch2" />
      </Row>

      <Row>
        <img src={sketch3} alt="sketch3" />
        <img src={sketch4} alt="sketch4" />
      </Row>
      <Row>
        <div className="thick medium">UI Design</div>
      </Row>
      <Row>
        <div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
            width="600"
            height="337.66"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3pNgPA3INnIdGQiWkHrc66%2FFridg-It%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D271-4233%26viewport%3D80%252C253%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A93"
            allowfullscreen
          ></iframe>
        </div>
        <div className="thin small">
          <div>
            Once I tested out all usability mistakes, I started designing the
            final screens in Figma.
          </div>
          <div>
            The visual style for this design was fresh and light, as it is
            supposed to help organize and not add stress to the user's life.
          </div>
        </div>
      </Row>
      <Row>
        <div>
          <div className="thick medium">Takeaway</div>
          <div className="thin small">
            During this project, I learned how much needs to be sketched and
            planned out before. This was the first time I did a project on this
            scale, and I struggled with the prototyping because I didn't plan
            everything with enough detail, to begin with.
          </div>
        </div>
      </Row>
    </Root>
  );
}
