export const capSentence = (text: string) => {
  let wordsArray = text.toLowerCase().split(' ');
  let capsArray = wordsArray.map((word) => {
    return word[0] === '-'
      ? word.slice(1).toUpperCase()
      : word.replace(word[0], word[0].toUpperCase());
  });
  return capsArray.join(' ');
};

export const randElm = (arrStr: string[]): string => {
  return arrStr[Math.floor(Math.random() * arrStr.length)];
};
