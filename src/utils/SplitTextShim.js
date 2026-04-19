/**
 * A simplified shim for GSAP's SplitText plugin.
 * Handles basic splitting into lines, words, or chars.
 */
export default class SplitText {
  constructor(element, { type = 'lines' } = {}) {
    this.element = element;
    this.type = type;
    this.lines = [];
    this.words = [];
    this.chars = [];
    this.init();
  }

  init() {
    const text = this.element.innerText;
    this.element.innerHTML = '';
    
    if (this.type.includes('lines')) {
      // Very simple line split (by newline as a guess, or just treat as one line if no breaks)
      // Real line splitting requires measuring. This shim treats each word as a potential wrap.
      const words = text.split(' ');
      const lineWrapper = document.createElement('div');
      lineWrapper.className = 'split-line';
      words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.innerText = word + ' ';
        wordSpan.className = 'split-word';
        lineWrapper.appendChild(wordSpan);
        this.words.push(wordSpan);
      });
      this.element.appendChild(lineWrapper);
      this.lines.push(lineWrapper);
    } else if (this.type.includes('words')) {
      const words = text.split(' ');
      words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.innerText = word + ' ';
        wordSpan.className = 'split-word';
        this.element.appendChild(wordSpan);
        this.words.push(wordSpan);
      });
    } else if (this.type.includes('chars')) {
      const chars = text.split('');
      chars.forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        charSpan.className = 'split-char';
        this.element.appendChild(charSpan);
        this.chars.push(charSpan);
      });
    }
  }

  revert() {
    this.element.innerHTML = this.element.innerText;
  }
}
