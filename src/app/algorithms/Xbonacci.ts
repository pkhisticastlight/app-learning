export class Xbonacci {
    //[1,0,0,0,0,0,1],10
    //Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - 
    //and remember each next element is the sum of the last X elements - and returns the 
    //first n elements of the so seeded sequence.
    //[1,1],10
    isXbonacci(signature,n) {
        let signatureLength =  signature.length;
        for(let i = signatureLength ; i < n ; i++) {
            let arr = signature.slice(i-signatureLength,signature.length + 1);
            let sum = arr.reduce((item,acc)=>acc+item,0);
            signature.push(sum);
        }
        return signature;
    }
}