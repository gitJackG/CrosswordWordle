import React from 'react';
import "./styles/styles.scss";

export default function App()  {
  return (
    <Grid solutions={["dog", "water", "food"]}/>
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
        lines.push(<Line solution={solutions[i]} type={i}/>)
    }
    return <div className='board'>{lines}</div>
}