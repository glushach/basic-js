const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(route) {
    if (route === false) {
      this.route = "reverse";
    } else {
      this.route = "direct";
    }
  }
  ciphering(message, key, method) { // method равен "encrypt" или "decrypt"
    const encrypted = [];
    message = message.toLowerCase().split('');
    message.forEach(item => {
      if (item >= "a" && item <= "z") {
        encrypted.push(item.charCodeAt(0));
      } else {
        encrypted.push(item);
      }
    });
    // console.log('Encrypted', encrypted)

    const keys = key.toLowerCase().split('').map(item => item.charCodeAt(0) - "a".charCodeAt(0));
    const result = [];
    let count = 0;

    encrypted.forEach((item, idx, arr) => {
      if (count === keys.length) count = 0;
      if (typeof(item) !== 'number') {
        result.push(item);
        return; // пропуск итерации
      }

      let char = '';
      if (method === 'encrypt') {
        char = item + keys[count];
        if (char > "z".charCodeAt(0)) char -= 26;
      } else {
        char = item - keys[count];
        if (char < "a".charCodeAt(0)) char += 26;
      }
      count++;
      result.push(String.fromCharCode(char));
    });

    return result.join('').toUpperCase();

  }

  encrypt(string, key) { // прямой шифровать
    // string(для кодирования) и key(string-ключевое слово)
    if (!(string && key)) throw new Error('Incorrect arguments!');

    if (this.route === 'direct') return this.ciphering(string, key, 'encrypt');

    let reverse = this.ciphering(string, key, 'encrypt');
    return reverse.split('').reverse().join('');
  }
  decrypt(string, key) { // реверсный расшифровать
    // string(для декодирования) и key( string-ключевое слово).
    if (!(string && key)) throw new Error('Incorrect arguments!');

    if (this.route === 'direct') return this.ciphering(string, key, 'decrypt');

    let reverse = this.ciphering(string, key, 'decrypt');
    return reverse.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

// npm run test ./test/vigenere-cipher.test.js