import { useState, useEffect } from 'react';
import Tile from './Tile';
import { checkGuess } from '../backend/algorithm';

function Board() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const wordLength = 5;
    const secretWord = 'KOMET';

    function handleChange(e) {
        setInput(e.target.value.toUpperCase());
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && input.length === wordLength) {
            const checked = checkGuess(wordLength, input, secretWord);
            setResult(checked);
            setInput('');
        }
    }

    return (


        <div className="board-container">
            <p className="input-label">Gissa ett hemligt ord på {wordLength} bokstäver:</p>
            <input
                className="input-field"
                type="text"
                maxLength={wordLength}
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown} />

            {result && (
                <div className="result-box">
                    {result.map((item, index) => (
                        <p key={index}>
                            {item.letter} - {item.result}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Board;








/*
 
const ROWS = 6;
const col = 5;
 
const [grid, setGrid] = useState(() =>
    Array.from({ length: ROWS }, () => Array(col).fill(""))
);

 
 
function KeyPressEvent(e, rowIndex, colIndex){
    const value = e.target.value.toUpperCase();
    
}


return (
    <>
        <div className="board">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((value, colIndex) => (
                        <Tile key={colIndex} letter={value} />
                    ))}
                </div>
            ))}
        </div>
    </>



);

*/