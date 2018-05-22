import { Component, OnInit } from '@angular/core';
import { LuhnAlgorithm } from './LuhnAlgorithm';
import { Xbonacci } from './Xbonacci'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learning app';

  ngOnInit() {
    //this.maxProduct([4,3,5], 2);
    //console.log(this.automorphic(25));
    //console.log(this.automorphic(63));
    //console.log(this.find_average([1,2,3]));
    //"hsi  etTi sats!"
    //hsi  ethsi  et
    //console.log(this.encrypt("This is a test!", 1));
    //
    //console.log(this.decrypt("This is a test!", 4));
    //let alg = new LuhnAlgorithm();
    //console.log(alg.validateCreditCard('1230'));
    //Xbonacci
    let xbon = new Xbonacci();
    console.log(xbon.isXbonacci([1,1],10));
  }
  
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

}
