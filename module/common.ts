export function replaceCharacter(text:string, character:string, from:number, to:number) {
  if (from && to && text.length >= from && text.length <= to) {
    for (let i = from; i <= to; i++) {
      text[i] = character;
    }
    return text;
  }
}

export function numberWithCommas(x:number) {
  if (isNaN(x)) return x;
  else return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}
