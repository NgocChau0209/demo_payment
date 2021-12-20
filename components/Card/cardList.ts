export const cardList = [
      {
            mask: '0000 000000 00000',
            regex: '^3[47]\\d{0,13}',
            cardtype: 'american express',
            color:"green"
      },
      {
            mask: '0000 0000 0000 0000',
            regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
            cardtype: 'discover',
            color:"purple"
      },
      {
            mask: '0000 000000 0000',
            regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
            cardtype: 'diners',
            color:"orange"
      },
      {
            mask: '0000 0000 0000 0000',
            regex: '^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$',
            cardtype: 'mastercard',
            color:"lightblue"
      },
      {
            mask: '0000 000000 00000',
            regex: '^(?:2131|1800)\\d{0,11}^(?:2131|1800|35\d{3})\d{11}$',
            cardtype: 'jcb15',
            color:"red"
      },
      {
            mask: '0000 0000 0000 0000',
            regex: '^(?:35\\d{0,2})\\d{0,12}',
            cardtype: 'jcb',
            color:"red"
      },
      {
            mask: '0000 0000 0000 0000',
            regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
            cardtype: 'maestro',
            color:"yellow"
      },
      {
            mask: '0000 0000 0000 0000',
            regex: '^4[0-9]{12}(?:[0-9]{3})?$',
            cardtype: 'visa',
            color:"lime"
      },
      {
            mask: '0000 0000 0000 0000',
            regex: '^(62[0-9]{14,17})$',
            cardtype: 'unionpay',
            color:"cyan"
      },
      {
            mask: '0000 0000 0000 0000',
            cardtype: 'Unknown'
      }
]
