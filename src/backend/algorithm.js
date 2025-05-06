export function checkGuess(nrOfLetters, guessWord, queryWord) {

    guessWord = guessWord.toUpperCase();
    queryWord = queryWord.toUpperCase();

    const evaluation = new Array(nrOfLetters).fill(null);
    const reservedIndex = new Array(nrOfLetters).fill(false);
    const MAX_LETTERS = nrOfLetters;

    if (guessWord === '') {
        return '';
    }

    //check if both letter and index in the guessed word matches the correct word.
    for (let i = 0; i < MAX_LETTERS; i++) {
        if (guessWord[i] === queryWord[i]) {

            evaluation[i] = {
                letter: guessWord[i],
                evaluation: 'correct'
            };
            //Reserve this index. This need no more evaluation.
            reservedIndex[i] = true;
        }
    }

    //check if a letter in the guessed word is somewhere in the queryWord, but not at the correct index, which is already checked. 
    for (let i = 0; i < MAX_LETTERS; i++) {

        /* if evaluation[i] have a "truthy" value, a letter already is evaluated at this index, no need to do something more in this iteration. 
        "null" is a falsy value. In this case, this means the same thing as "if(evaluation[i] !== null)". 
        "continue" skips this iteration and loop starts over with i+1 */
        if (evaluation[i]) continue;

        for (let k = 0; k < MAX_LETTERS; k++) {

            if (reservedIndex[k]) continue;

            if (guessWord[i] === queryWord[k]) {
                evaluation[i] = {
                    letter: guessWord[i],
                    evaluation: 'misplaced'
                };

                //Reserve indexes for misplaced so there will be no overwriting. 
                reservedIndex[k] = true;
                break;
            }

        }
        //If no match above, the letter does not exist in queryWord. 
        if (!evaluation[i]) {
            evaluation[i] = {
                letter: guessWord[i],
                evaluation: 'incorrect'
            }
        }
    }

    return evaluation;
}