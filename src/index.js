const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    const codeBlock = expr.substring(i, i + 10);
    if (codeBlock === '**********') {
      result += ' ';
    } else if (codeBlock) {
      const cleanCodeBlock = codeBlock.replace(/^0+/, '');
      let morzeLetter = '';

      for (let j = 0; j < cleanCodeBlock.length; j += 2) {
        const pairSymb = cleanCodeBlock.substring(j, j + 2);
        if (pairSymb === '10') morzeLetter += '.';
        if (pairSymb === '11') morzeLetter += '-';
      }
      result += MORSE_TABLE[morzeLetter] || '';
    }
  }
  return result;
};
