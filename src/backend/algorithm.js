export function checkGuess(guessWord, queryWord) {

    guessWord = guessWord.toUpperCase();
    queryWord = queryWord.toUpperCase();

    const result = new Array(5).fill(null);
    const reservedIndex = new Array(5).fill(false);
    const MAX_LETTERS = 5;

    if (guessWord === '') {
        return '';
    }

    //check if both letter and index in the guessed word matches the correct word.
    for (let i = 0; i < MAX_LETTERS; i++) {
        if (guessWord[i] === queryWord[i]) {

            result[i] = {
                letter: guessWord[i],
                result: 'correct'
            };
            //Reserve this index. This need no more evaluation.
            reservedIndex[i] = true;
        }
    }

    //check if a letter in the guessed word is somewhere in the queryWord, but not at the correct index, which is already checked. 
    for (let i = 0; i < MAX_LETTERS; i++) {

        /* if result[i] have a "truthy" value, a letter already is evaluated at this index, no need to do something more in this iteration. 
        "null" is a falsy value. In this case, this means the same thing as "if(result[i] !== null)". 
        "continue" skips this iteration and loop starts over with i+1 */
        if (result[i]) continue;

        for (let k = 0; k < MAX_LETTERS; k++) {

            if (reservedIndex[k]) continue;

            if (guessWord[i] === queryWord[k]) {
                result[i] = {
                    letter: guessWord[i],
                    result: 'misplaced'
                };

                //Reserve indexes for misplaced so there will be no overwriting. 
                reservedIndex[k] = true;
                break;
            }

        }
        //If no match above, the letter does not exist in queryWord. 
        if (!result[i]) {
            result[i] = {
                letter: guessWord[i],
                result: 'incorrect'
            }
        }
    }

    return result;
}