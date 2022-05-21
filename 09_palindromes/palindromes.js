const palindromes = function (word) {
    word = word.replace(/[^\w\s\']|/g, "").replace(/\s/g,'')
    word = word.toLowerCase();
    let midpoint = word.length/2;
    for (let i = 0; i < midpoint; i++){
        if (word[i] !== word[word.length-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
