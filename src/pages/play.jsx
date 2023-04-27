import  AnimatedText  from "../components/AnimatedText.jsx";
import {Root, Letters} from '../styles/playStyles.jsx';

export default function Play(){
return (
    <Root>
        <Letters>
        <div className="one">   
            <AnimatedText delay={1400} startIndex={0}/>
        </div>

        <div className="two">   
            <AnimatedText delay={800} startIndex={1}/>
        </div>

        <div className="three">   
            <AnimatedText delay={950} startIndex={7}/>
        </div>

        <div className="four">   
            <AnimatedText delay={1050} startIndex={2}/>
        </div>

        <div className="five">   
            <AnimatedText delay={1100} startIndex={3}/>
        </div>

        <div className="six">   
            <AnimatedText delay={1290} startIndex={6}/>
        </div>
        </Letters>
    </Root>
)
};