import { Root, Header, HeaderLine, Title, Paragraph, SubTitle, Group } from "../styles/resumeStyles"

export default function Resume(){
    return(
        <Root>
            <Header>
                <HeaderLine>
                Miriam Orlansky 
                 </HeaderLine>

                 <HeaderLine>
                 <a>
                miriamorlansky12@gmail.com
                 </a>
                 <div> | 240-480-0712</div> 
                 </HeaderLine>
                 <HeaderLine>
                 <a> http://www.linkedin.com/in/miriam-orlansky/ </a> 
                 <div>|</div><a>www.miriamsdesign.com</a></HeaderLine>
            </Header>

            <Group>
            <Title>
                Objective
            </Title>
            <Paragraph>I am a UI designer and developer with a passion for designing usable products and an enjoyment of the logical challenge of programming. I am looking for a position that will include both of these aspects.
            </Paragraph>
            </Group>

            <Group>
            <Title>
                Experience
            </Title>
            <Paragraph>
                <div>
                    <SubTitle>
                    UX-UI Engineer ∙ Mitre Corporation – McLean, VA May 2023 - Present
                    </SubTitle>
                    <ul>
                        <li>I just started so wish me luck!</li>
                        <li>Check back soon to view my accomplishments here...</li>
                    </ul>
                </div>
                <div>
                    <SubTitle>
                    UI Engineer ∙ Madison Title Agency – Lakewood, NJ Aug 2022  -  April 2023
                    </SubTitle>
                    <ul>
                        <li>Used Figma to design and prototype new interfaces and update existing interfaces for internal applications to allow for more efficient workflow within the company. This included a new interface for a client phonebook, and a duplicate matching and merging interface to filter out pre-existing contacts within the phonebook.</li>
                        <li> Added features such as scroll-to-top buttons, add/edit contact forms, filters, and new closing modals to existing applications using HTML, CSS, JS, and REACT to allow for more clarity of the information being shown to the user.</li>
                        <li> Collaborated with product owners and end users to gain an understanding of the users’ current workflow and incorporated this into designs. I then conveyed this information to the back-end developers so the back-end could reflect the proper logic and flow.</li>
                        <li> Designed and programmed the UI for a new public-facing site for the company's 1031 program to allow for the company to spread its client base by having an updated and professional look.</li>
                        <li>Participated in Agile processes by attending weekly sprint planning meetings and completing assigned tickets.</li>
                    </ul>
                </div>
                <div>
                    <SubTitle>
                    UI Designer ∙ Marconi Technologies – Remote June 2022 - Feb 2023
                    </SubTitle>
                    <ul>
                        <li>Clarified user flow for the new app being developed; took into account the most used features and commonly used action buttons.</li>
                        <li> Used Figma to design and prototype Android app for users to view and approve fire safety codes.</li>
                        <li>  Added features to app for tablet view, such as a grid of the current floor plan with which the users can interact. Designed functionality for the user to add comments to each section of the floor plan based on fire safety codes.</li>
                        <li>  Collaborated with developers to create a usable and efficient product that would take minimal development time and cost.
                        </li>
                    </ul>
                </div>
            </Paragraph>
            </Group>

            <Group>
            <Title>
                Skills
            </Title>
            <Paragraph>
                <div>Code: HTML, CSS, JS, React, Tower, Git</div>
                <div>Design: Figma, XD, InDesign, Photoshop, Illustrator, Personas, User Journeys</div>
            </Paragraph>
            </Group>

            <Group>
            <Title>
                Education
            </Title>
            <Paragraph>
                <div>Masters of Web & Multimedia Design ∙ Touro University – 2023</div>
                <div>Bachelors of Liberal Arts ∙ Thomas Edison State University - 2021</div>
            </Paragraph>
            </Group>
        </Root>
    )
};