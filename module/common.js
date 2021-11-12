export function replaceCharacter (string,character, from , to){
    if(from && to && string.length >= from && string.length<=to){
        for(let i = from ; i<= to;i++){
            string[i] = character; 
        }
        return string;
    }
}

export function formartInlineStyle (objStyle) {
    let result = "";
    if (objStyle && Object.keys(objStyle).length) {
      for (let key in objStyle) {
        result += key + ":" + objStyle[key] + ";";
      }
    }
    console.log(result)
    return result;
  }

  export function numberWithCommas (x) {
    if (isNaN(x)) return x;
    else return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}


