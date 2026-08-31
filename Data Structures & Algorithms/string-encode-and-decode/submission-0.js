class Solution {
  encode(strs) {
    let newStr = '';
    for (const str of strs) newStr += str.length + '#' + str;
    return newStr;
  }

  decode(str) {
    const newArr = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') j++;
      let lengthOfWord = +str.slice(i, j);
      let wordStartIndex = j + 1;
      let wordEndIndex = wordStartIndex + lengthOfWord;
      newArr.push(str.slice(wordStartIndex, wordEndIndex));
      i = wordEndIndex;
    }
    return newArr;
  }
}