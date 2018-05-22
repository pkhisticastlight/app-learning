export class MiscAlgo {
maxProduct(numbers, size){
   numbers.array.forEach((element, index) => {
     
   }); 
  }

  automorphic(n){
    let square = n*n;
    return String(square).endsWith(String(n)) == true ? "Automorphic" : "Not!!";
  }

  find_average(array) {
    return array.reduce((item,acc)=>acc+item)/array.length;
  }

  // For building the encrypted string:
  // Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
  // Do this n times!  
  encrypt(text, n) {
    if(n == null || n <= 0) {
      return text;
    }
    let length = text.length;
    for(let i = 1 ; i<=n; i++) {
      let encrypted = '';
      let secondString = '';
      let textArray = text.split('');
      textArray.forEach((element,index)=>{
        if(index%2!=0){
          encrypted = encrypted + element;
        }
        if(index%2==0){
           secondString = secondString  + element;
        }
      });
      text = encrypted + secondString;
    }
    return text;
  }

  decrypt(encryptedText, n) {
     for(let i = 1 ; i<=n; i++) {
      let mid = encryptedText.length%2==0 ? Math.ceil(encryptedText.length/2) : Math.ceil(encryptedText.length/2) -1;
      let encrypted = encryptedText.substring(0,mid);
      let secondString = encryptedText.substring(mid,encryptedText.length);
      let finalText = '';
      for(let x = 0; x<=mid;x++) {
        if(secondString[x]!=undefined) {
           finalText = finalText + secondString[x]
        }
        if(encrypted[x] != undefined) {
          finalText = finalText + encrypted[x];
        }
       }
      encryptedText = finalText;
     }
    return encryptedText;
  }

  sortTheInnerContent(words)
  {
    let array = words.split(' ');
    let modified = array.map((item)=>{
      let arr = item.split('');
      return arr[0].concat(arr.slice(1,arr.length-2).sort((a,b)=>b.localeCompare(a))).concat(arr[arr.length-1]);
    })
    return modified.join(' ');
  }

  averageString(str) {  
    if(str.length <= 1) {
      return 'n/a';
    }
    const numberMapping = {
      "zero" : 0,
      "one" : 1,
      "two" : 2,
      "three" : 3,
      "four" : 4,
      "five" : 5,
      "six" : 6,
      "seven" : 7,
      "eight" : 8,
      "nine" : 9
    }
    let array = str.split(' ');
    let numberArray = array.map((item)=>numberMapping[item]);
    let average = Math.floor(numberArray.reduce((i,acc)=>acc+i,0)/array.length);
    if(average>9) {
      return 'n/a'
    }
    let result = '';
    let keys = Object.keys(numberMapping);
    keys.forEach(i=>{
      if(numberMapping[i]==average) {
        result = numberMapping[i]
      }
    });
    return result;
  }
}