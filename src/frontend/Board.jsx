import { useState } from 'react';
import Button from './Button';

function Board() {

    const rows = 6;
    const [letters, setLetters] = useState(5);

    return (
        <>
            <div className="board">
                {[...Array(rows)].map((_, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {[...Array(letters)].map((_, index) => (
                            <Button key={index} />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}




export default Board