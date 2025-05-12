import { useState, useEffect } from 'react';
import { checkGuess } from '../backend/algorithm.js';

function Board({ wordLength }) {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [secretWord, setSecretWord] = useState('');

    useEffect(() => {
        async function getWord() {
            try {
                const res = await fetch(`/api/word/${wordLength}`);
                const data = await res.json();
                setSecretWord(data.word);
            } catch (err) {
                console.error('Error fetching word:', err);
                setSecretWord('');
            }
        }
        getWord();
    }, [wordLength]);

    function handleChange(e) {
        setInput(e.target.value.toUpperCase());
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && input.length === wordLength && secretWord) {
            const checked = checkGuess(wordLength, input, secretWord);
            setResult(checked);
            setInput('');

        }
    }

    return (

        <div className="board-container">
            <p className="input-label">Guess the secret word with {wordLength} letters:</p>
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
                            {item.letter} - {item.evaluation}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Board;
