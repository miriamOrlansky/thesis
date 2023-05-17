import {
  Root,
  TitleSection,
  Title,
  Subtitle,
  Row,
} from "../styles/pagesStyles";

import wireframe1 from "../Images/noteeWireframe1.png";
import wireframe2 from "../Images/noteeWireframe2.png";
import wireframe3 from "../Images/noteeWireframe3.png";
import wireframe4 from "../Images/noteeWireframe4.png";
import visual1 from "../Images/noteevisual1.png";
import visual2 from "../Images/noteevisual2.png";
import visual3 from "../Images/noteevisual3.png";
import visual4 from "../Images/noteevisual4.png";

export default function Notee() {
  return (
    <Root>
      <TitleSection backColor="#D8D6FF">
        <Title>Notee</Title>
        <Subtitle>Money Management App</Subtitle>
      </TitleSection>

      <Row>
        <div>
          <div className="thick large">Class Project</div>
          <div className="thin small">
            <div>Problem: Lack of funds left to pay back student loans.</div>
            <div>Role: Sole Designer</div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="thick regular top">Final Prototype</div>
      </Row>
      <Row>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
          width="600"
          height="337.66"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fl72u0bvVeMdLDxh1viPV0N%2FWireframes-Hi-Fidelity%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D221-3497%26viewport%3D-2568%252C43%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3"
          allowfullscreen
        ></iframe>
      </Row>
      <Row>
        <div className="thick regular top">User Development</div>
      </Row>
      <Row>
        <div className="thick small">Interviews</div>
      </Row>
      <Row>
        <div className="center third">
          <div className="medium extraLarge purple"> 100% </div>
          <div className="purple medium large"> Of Interviewees</div>
          <div>
            Said that social pressure affects the way they follow their planned
            budget.{" "}
          </div>
        </div>
        <div className="center third">
          <div className="medium extraLarge purple"> 100% </div>
          <div className="purple medium large"> Of Interviewees</div>
          <div>
            Have never found outside help or applications to be useful in
            managing their budget.
          </div>
        </div>
        <div className="center third">
          <div className="medium extraLarge purple"> 66% </div>
          <div className="purple medium large"> Of Interviewees</div>
          <div>
            Said that lack of simplicity within their budgeting makes it hard to
            manage their budget.
          </div>
        </div>
      </Row>
      <Row>
        <div className="thick regular top">Wireframes</div>
      </Row>
      <Row>
        <div>
          I created these wireframes based on the user interviews by gearing the
          app solely towards notifying the user when monthly budgets are getting
          used. Take away the complications - once the app is set up, it will do
          everything.
        </div>
      </Row>

      <Row>
        <img className="fourth" src={wireframe1} alt="wireframe1" />
        <img className="fourth" src={wireframe2} alt="wireframe2" />
        <img className="fourth" src={wireframe3} alt="wireframe3" />
        <img className="fourth" src={wireframe4} alt="wireframe4" />
      </Row>
      <Row>
        <div className="thick small top">Wireframe Usability Tests</div>
      </Row>
      <Row>
        <div className="center third">
          <div className="medium extraLarge purple"> 4/4 </div>
          <div className="purple medium large">Testers</div>
          <div>Struggled setting the spending goal for each category</div>
        </div>
        <div className="center third">
          <div className="medium extraLarge purple"> 2/4 </div>
          <div className="purple medium large"> Testers</div>
          <div>Wanted more clarity when connecting a bank acocunt.</div>
        </div>
        <div className="center third">
          <div className="medium extraLarge purple"> 4/4 </div>
          <div className="purple medium large"> Testers</div>
          <div>Successfully created an account!</div>
        </div>
      </Row>
      <Row>
        <div className="thick regular top">Visual Design</div>
      </Row>
      <Row>
        <div>
          I then added the visual designs to the wireframes, as well as changing
          aspects of the user flow based on the wireframe usability tests.
        </div>
      </Row>

      <Row>
        <img className="fourth" src={visual1} alt="visual1" />
        <img className="fourth" src={visual2} alt="visual2" />
        <img className="fourth" src={visual3} alt="visual3" />
        <img className="fourth" src={visual4} alt="visual4" />
      </Row>

      <Row>
        <div className="thick regular top">Final Prototype</div>
      </Row>
      <Row>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
          width="600"
          height="337.66"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fl72u0bvVeMdLDxh1viPV0N%2FWireframes-Hi-Fidelity%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D221-3497%26viewport%3D-2568%252C43%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3"
          allowfullscreen
        ></iframe>
      </Row>
    </Root>
  );
}
