export class LuhnAlgorithm {

  constructor() { }

// Double every other digit, scanning from right to left, starting from the second digit (from the right).

// Another way to think about it is: 
//if there are an even number of digits, double every other digit starting with the first; 
//if there are an odd number of digits, double every other digit starting with the second:

// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits 
//(which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:

// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. 
//If the remainder equals zero, the original credit card number is valid.

//   18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
  validateCreditCard(cNumber: string): boolean {
      let array = cNumber.split('');
      let length = array.length;
      let mapped = array.map((item,index)=>{
        if(length%2==0) {
            if(index%2==0) {
                let prod = parseInt(item) * parseInt(item);
                return prod > 9 ? prod - 9 :prod;
            } else {
                return parseInt(item);
            }
        } else {
            if(index%2==1) {
                let prod = parseInt(item) * parseInt(item);
                return prod > 9 ? prod - 9 :prod;
            } else {
                return parseInt(item);
            }
        }
      });
    let sum = mapped.reduce((item,acc)=>acc+item);
    return sum%10==0?true:false;
  }
}