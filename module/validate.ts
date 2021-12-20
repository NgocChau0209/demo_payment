export function validateEmail(email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
}

export function validateMatchString(str1:string, str2:string) {
      return str1.localeCompare(str2);
}

export function validatePhoneNumber(number: string) {
      const strNumber = number.toString().replace(/ /g, "");
      return (
            /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(strNumber) &&
            strNumber.length >= 10 &&
            strNumber.length <= 11
      );
}