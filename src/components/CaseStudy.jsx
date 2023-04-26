import { Info, Picture, Root, Title } from "../styles/caseStudyStyles";

export default function CaseStudy({title, source}) {
    return(
        <Root>
            <Picture>
                <img src={source} alt='caseStudyImg'/>
            </Picture>
            <Info>
                <Title>{title}</Title>
                <div>View Case Study</div>
            </Info>
        </Root>
    )
}