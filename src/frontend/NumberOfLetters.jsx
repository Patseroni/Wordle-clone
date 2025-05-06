function NumberOfLetters({ wordLength, setWordLength }) {
    function handleChange(e) {
        setWordLength(Number(e.target.value));
    }

    return (
        <div className="nrOfLetters-div">
            <p>Choose number of letters:</p>
            <select className="number-of-letters" value={wordLength} onChange={handleChange}>
                {[3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default NumberOfLetters;