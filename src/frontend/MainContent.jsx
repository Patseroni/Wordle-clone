import Board from "./Board";
import NumberOfLetters from "./NumberOfLetters";

function MainContent({ wordLength, setWordLength }) {
    return (
        <div className="main-content">
            <NumberOfLetters wordLength={wordLength} setWordLength={setWordLength} />
            <Board wordLength={wordLength} />
        </div>
    );
}

export default MainContent;