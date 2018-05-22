export class FoldArray {
    pleaseFoldArray(array,runs) {
        let result = array.slice();
        for(let i = 1; i <= runs; i ++) {
            let midPoint = Math.floor(result.length/2);
            for(let x = 1 ; x <= midPoint ; x++) {
                let lastItem = result.pop();
                result[x-1] = parseInt(result[x-1]) + parseInt(lastItem);
            }   
        }
        return result;
    }
}