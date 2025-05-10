export async function fetchAllWords() {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words_dictionary.json');
    const data = await response.json();
    return Object.keys(data);
}

export async function getWordByLength(length) {
    try {
        const allWords = await fetchAllWords();
        const filteredWords = allWords.filter(word => word.length === length);
        if (filteredWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredWords.length);
            return filteredWords[randomIndex];
        }
        else {
            console.log('Cannot find word.');
        }

    }
    catch {
        console.error('Error when fetching word.', error.message);
    }

}
