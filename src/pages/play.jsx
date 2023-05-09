import  AnimatedText  from "../components/AnimatedText.jsx";
import {Root, Letters, DownArrow, Art, GalleryArt, Baking, GalleryBaking, Line1,Line2} from '../styles/playStyles.jsx';

export default function Play(){
return (
    <Root>
        <Letters>
        <div className="one">   
            <AnimatedText delay={1437} startIndex={0}/>
        </div>

        <div className="two">   
            <AnimatedText delay={813} startIndex={1}/>
        </div>

        <div className="three">   
            <AnimatedText delay={951} startIndex={7}/>
        </div>

        <div className="four">   
            <AnimatedText delay={1073} startIndex={2}/>
        </div>

        <div className="five">   
            <AnimatedText delay={1109} startIndex={3}/>
        </div>

        <div className="six">   
            <AnimatedText delay={1293} startIndex={6}/>
        </div>
        </Letters>
        <DownArrow>
        </DownArrow>
        <Line1/>
        <Line2/>
        <Art>
       <GalleryArt > <div className="title">Art</div> 
        <div class="image-grid">
  <div class="image-row">
    <div class="image image-01"></div>  
    <div class="image image-02"></div>  
    <div class="image image-03"></div>  
  </div> 
  <div class="image-row">
    <div class="image image-04"></div>  
    <div class="image image-05"></div>  
  </div>  
  <div class="image-row">
    <div class="image image-07"></div>  
    <div class="image image-08"></div>  
    <div class="image image-09"></div>  
  </div>  
</div></GalleryArt>
        </Art>
        <Baking>
       <GalleryBaking > <div className="title">Baking</div> 
        <div class="image-grid">
  <div class="image-row">
    <div class="image image-01"></div>  
    <div class="image image-02"></div>  
    <div class="image image-03"></div>  
  </div> 
  <div class="image-row">
    <div class="image image-04"></div>  
    <div class="image image-05"></div>  
    <div class="image image-06"></div>  
  </div>  
  <div class="image-row">
    <div class="image image-07"></div>  
    <div class="image image-08"></div>  
    <div class="image image-09"></div>  
  </div>  
</div></GalleryBaking>
        </Baking>
    </Root>
)
};