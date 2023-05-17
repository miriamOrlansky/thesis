import { Info, Picture, Root, Title } from "../styles/caseStudyStyles";

export default function CaseStudy({title, source, link}) {
    return(
        <Root>
            <a href={link}>
            <Picture>
                <img src={source} alt='caseStudyImg'/>
            </Picture>
            <Info>
                <Title>{title}</Title>
                <div>View Case Study</div>
            </Info>
            </a>
        </Root>
    )
}