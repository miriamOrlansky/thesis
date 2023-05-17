import { Info, Picture, Root, Title } from "../styles/studyCaseStyles";

export default function StudyCase({title, source, link}) {
    return(
        <Root> 
            <a href={link}>
            <Info>
                <Title>{title}</Title>
                <div>View Case Study</div>
            </Info>
            <Picture>
                <img src={source} alt='caseStudyImg'/>
            </Picture>
           </a>
        </Root>
    )
}