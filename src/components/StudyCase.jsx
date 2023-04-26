import { Info, Picture, Root, Title } from "../styles/studyCaseStyles";

export default function StudyCase({title, source}) {
    return(
        <Root> <Info>
                <Title>{title}</Title>
                <div>View Case Study</div>
            </Info>
            <Picture>
                <img src={source} alt='caseStudyImg'/>
            </Picture>
           
        </Root>
    )
}