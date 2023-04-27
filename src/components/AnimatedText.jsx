
import { Root, Transition } from "../styles/animatedTextStyles"
import React, { useState, useEffect } from 'react';


export default function AnimatedText({delay, startIndex}) {
  const words = [
    {id: 1, text:' Pianist.'}, 
    {id: 2, text:'Bundt Cake Enthusiast.'}, 
    {id: 3, text:'Griffindorian.'},
    {id: 4,text: 'Aspiring Violinist.'}, 
    {id: 5, text: 'Learner.'}, 
    {id: 6,text:'Açaí Connoisseur.'},
    {id: 7, text: 'Van life wannabe.'}, 
    {id: 8, text:'Friend.'}
    ];
   const [word, setWord] = useState(words[startIndex].text);
   const [index, setIndex] = useState(startIndex);
   
   useEffect(() => {
     const interval = setInterval(() => {
       const nextIndex = (index + 1) % words.length;
       setIndex(nextIndex);
       setWord(words[nextIndex].text);
     }, delay);
     return () => clearInterval(interval);
   }, [index, words, delay]);
 
  return (
    <Root>
      <Transition> {word}</Transition>
    </Root>
  )
}