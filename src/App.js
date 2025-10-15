import React from 'react';
import "./styles/styles.scss";

const DAILY_WORDS = 8;

export default function App()  {
  return (
    <Grid solutions={getWords()}/>
  );
};


function Line({solution, type}){
    const squares = [];
    for (let i = 0; i < solution.length; i++){
        const letter = solution[i];
        squares.push(<div key={i} className='square'>{letter}</div>)
    }
    return type == 0 ? <div className='hline'>{squares}</div> : <div className='vline'>{squares}</div>;
}
 

function Grid({solutions}){
    const lines = [];
    for (let i = 0; i < solutions.length; i++){
        lines.push(<Line key={i} solution={solutions[i]} type={i}/>)
    }
    return <div className='board'>{lines}</div>
}

const getWords = () =>{
    let words = ["animal", "lawnmower", "ambulance"];
    // for (let i = 0; i < DAILY_WORDS; i++) words.push(await fetch(`https://api.datamuse.com/words?ml=duck&sp=b*`));
    return words;
}