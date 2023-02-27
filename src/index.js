const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let result = [] 
   for (let i = 0; i < expr.length; i += 10){ 
    result.push(expr.slice(i, i + 10));
   }
   result.forEach((el,index) => {
    let strDecode = ''
    if (el.search(1) != -1) {
    strDecode = el.slice(el.search(1)).replaceAll('10', '.').replaceAll('11', '-')
    result[index] = MORSE_TABLE[strDecode] 
    }
    if (el.includes('**********')) {
        result[index] = ' '
    }
   })
   return result.toString().replaceAll(',','')
}

module.exports = {
    decode
}