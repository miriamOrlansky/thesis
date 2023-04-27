import  AnimatedText  from "../components/AnimatedText.jsx";
import {Root, Letters, DownArrow, Art, Grid, Title} from '../styles/playStyles.jsx';
import Img1 from '../Images/img1.svg';
import Img2 from '../Images/img2.svg';
import Img3 from '../Images/img3.svg';
import Img4 from '../Images/img4.svg';
import Img5 from '../Images/img5.svg';
import Img6 from '../Images/img6.svg';
import Img7 from '../Images/img7.svg';
import Img8 from '../Images/img8.svg';
import Img9 from '../Images/img9.svg';
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
        <DownArrow>

        </DownArrow>
        <Art>
        <Title>Art</Title>
        <Grid>
        <img className="one" src={Img1} alt='1'/>
        <img className='two' src={Img2} alt="2"/>
        <img className='three' src={Img3} alt="3"/>
        <img className='four' src={Img4} alt="4"/>
        <img className='five' src={Img5} alt="5"/>
        <img className='six' src={Img6} alt="6"/>
        <img className='seven' src={Img7} alt="7"/>
        <img className='eight' src={Img8} alt="8"/>
        <img className='nine' src={Img9} alt="9"/></Grid>
        </Art>
    </Root>
)
};